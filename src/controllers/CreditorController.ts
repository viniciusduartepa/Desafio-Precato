import { Request,Response } from "express"

import CreditorRepository from "database/repositories/CreditorRepository";


const CreditorController={
    async index(request:Request,response:Response):Promise<Response>{
        const creditor= await new CreditorRepository ().index();
        return response.json(creditor);
    },
    async create(request: Request,response: Response): Promise<Response> {
        const creditorInfo = request.body;
        if (!(creditorInfo.name && creditorInfo.cpf && creditorInfo.status)) {
            return response.json({message:"Missing required information to register a Creditor"});
        }

        const  existentCreditor  = await new CreditorRepository().findByCpf(
            creditorInfo.cpf
        );
        if (existentCreditor) {
            return response.json({message:"Cpf already in use"});
        }

        if(creditorInfo.status!="Aprovado" && creditorInfo.status!="Reprovado"){
            return response.json({message:"Invalid Status"});
        }

        const createdCreditor = await new CreditorRepository().create(creditorInfo);
        return response.status(201).json(createdCreditor);
      },
    
}

export default CreditorController; 