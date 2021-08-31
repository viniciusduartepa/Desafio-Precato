import { Request,Response } from "express"

import PaymentRepository from "../database/repositories/PaymentRepository"


const PaymentController={
    async index(request:Request,response:Response):Promise<Response>{
        const payment= await new PaymentRepository().index();
        return response.json(payment);
    }
}

export default PaymentController; 