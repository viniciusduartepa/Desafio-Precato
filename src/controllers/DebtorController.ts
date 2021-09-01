import { Request,Response } from "express"

import DebtorRepository from "database/repositories/DebtorRepository";


const DebtorController={
    async index(request:Request,response:Response):Promise<Response>{
        const debtors= await new DebtorRepository ().index();
        return response.json(debtors);
    },
    async create(request: Request,response: Response): Promise<Response> {
        const debtorInfo = request.body;
        if (!(debtorInfo.name && debtorInfo.cnpj)) {
            return response.status(422).json({message:"Missing required information to register a Debtor"});
        }

        const  existentDebtor  = await new DebtorRepository().findByCnpj(
            debtorInfo.cnpj
        );
        if (existentDebtor) {
            return response.status(422).json({message:"Cnpj already in use"});
        }

        const createdDebtor = await new DebtorRepository().create(debtorInfo);
        return response.status(201).json(createdDebtor);
      },
    
}

export default DebtorController; 