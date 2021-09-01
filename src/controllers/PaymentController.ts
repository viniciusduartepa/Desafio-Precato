import { Request,Response } from "express";

import PaymentRepository from "../database/repositories/PaymentRepository";
import CreditorRepository from "database/repositories/CreditorRepository";
import DebtorRepository from "database/repositories/DebtorRepository";

const PaymentController={
    async index(request:Request,response:Response):Promise<Response>{
        const payment= await new PaymentRepository().index();
        return response.json(payment);
    },

    async create(request:Request,response:Response):Promise<Response>{
        const paymentInfo = request.body;
        if (!(paymentInfo.remessa
            ||paymentInfo.creditor
            || paymentInfo.debtor
            || paymentInfo.initialValue
            || paymentInfo.finalValue
            || paymentInfo.data
            )) {
            return response.status(422).json({message:"Missing required information to register a payment"});
        }

        const  existentPayment  = await new PaymentRepository().findById(
            paymentInfo.id
        );
        if (existentPayment) {
            return response.status(422).json({message:"Id already in use"});
        }

        const creditor= await new CreditorRepository(). findById(
            paymentInfo.creditor
        )
        if(!creditor){
            delete paymentInfo.creditor;
            if( ! await new DebtorRepository().findById(paymentInfo.debtor)){
                delete paymentInfo.debtor;
            }
            const payment= await new PaymentRepository().create(
                {...paymentInfo,
                 status:"Recusado",
                 reason:"Creditor does not exist"
            });
            return response.status(201).json(payment);
        }

        const debtor= await new DebtorRepository(). findById(
            paymentInfo.debtor
        )
        if(!debtor){
            delete paymentInfo.debtor;
            const payment= await new PaymentRepository().create(
                {...paymentInfo,
                 status:"Recusado",
                 reason:"Debtor does not exist"
            });
            return response.json(payment);
        }
        const payments= await new PaymentRepository(). findByCreditor(paymentInfo.creditor);

        for(var i=0;i<payments.length;i++){
            if(paymentInfo.remessa==payments[i].remessa){
                const payment= await new PaymentRepository().create(
                    {...paymentInfo,
                     status:"Recusado",
                     reason:"Remessa Invalida para esse Credor"
                });
                return response.status(201).json(payment);
            }
        }

        if(creditor.status=="Reprovado"){
            const payment= await new PaymentRepository().create(
                {...paymentInfo,
                 status:"Recusado",
                 reason:"Creditor status refused"
            });
            return response.status(201).json(payment);
        }

        if(paymentInfo.initialValue<=0 || paymentInfo.finalValue<=0){
            const payment= await new PaymentRepository().create(
                {...paymentInfo,
                 status:"Recusado",
                 reason:"Initial or Final value invalid"
            });
            return response.status(201).json(payment);
        }

        if(paymentInfo.finalValue>paymentInfo.initialValue){
            const payment= await new PaymentRepository().create(
                {...paymentInfo,
                 status:"Recusado",
                 reason:"Final value bigger then InitialValue"
            });
            return response.status(201).json(payment);
        }

        const payment= await new PaymentRepository().create(
            {...paymentInfo,
             status:"Aprovado",
        });
        return response.status(201).json(payment);
    },

    async getRefused(request:Request,response:Response):Promise<Response>{
        const payments= await new PaymentRepository().findByStatus("Recusado");
        return response.json(payments);
    },

}

export default PaymentController; 