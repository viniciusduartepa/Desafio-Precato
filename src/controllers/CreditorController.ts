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
            throw new Error('Missing required information to register an creditor');
        }

        const  existentCreditor  = await new CreditorRepository().findByCpf(
            creditorInfo.cpf
        );
        if (existentCreditor) {
            throw new Error('Cpf already in use');
        }

        if(creditorInfo.status!="Aprovado" && creditorInfo.status!="Reprovado"){
          throw new Error('Invalid Status');
        }

        const createdCreditor = await new CreditorRepository().create(creditorInfo);
        return response.status(201).json(createdCreditor);
      },
    
}

export default CreditorController; 