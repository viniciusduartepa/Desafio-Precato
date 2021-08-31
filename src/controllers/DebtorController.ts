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
            throw new Error('Missing required information to register an deditor');
        }

        const  existentDebtor  = await new DebtorRepository().findByCnpj(
            debtorInfo.cnpj
        );
        if (existentDebtor) {
            throw new Error('Cnpj already in use');
        }

        const createdDebtor = await new DebtorRepository().create(debtorInfo);
        return response.status(201).json(createdDebtor);
      },
    
}

export default DebtorController; 