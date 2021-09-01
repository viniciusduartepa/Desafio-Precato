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

    public async create(model: Payment): Promise<Payment> {
        const payment = this.ormRepository.create(model);
        const createdPayment = await this.ormRepository.save(payment);
    
        return createdPayment;
    }

    public async findById(id: String): Promise<Payment>{
        const [payment] = await this.ormRepository.find({where:{id}});
        return payment;
    }

    public async findByCreditor(creditor: String): Promise<Payment[]>{
        return await this.ormRepository.find({where:{creditor}});
        
    }

    public async findByStatus(status: String): Promise<Payment[]>{
        return await this.ormRepository.find({where:{status}});
        
    }



}