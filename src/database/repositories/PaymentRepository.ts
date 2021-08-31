import {getRepository,Repository} from 'typeorm'

import Payment from '../entities/Payment'

export default class PaymentRepository{
    private ormRepository:Repository<Payment>;
    constructor(){
        this.ormRepository=getRepository(Payment);
    }

    public async index(){
        const payments=await this.ormRepository.find({
            relations:["creditor","debtor"]
        })
        return payments;
    }
}