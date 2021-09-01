import {getRepository,Repository} from 'typeorm'

import Creditor from 'database/entities/Creditor';

export default class CreditorRepository{
    private ormRepository:Repository<Creditor>;
    constructor(){
        this.ormRepository=getRepository(Creditor);
    }

    public async index(){
        const creditors=await this.ormRepository.find()
        return creditors;
    }

    public async create(model: Creditor): Promise<Creditor> {
        const creditor = this.ormRepository.create(model);
        const createdCreditor = await this.ormRepository.save(creditor);
    
        return createdCreditor;
    }

    public async findByCpf(cpf: String): Promise<Creditor>{
        const [creditor] = await this.ormRepository.find({where:{cpf}});
        return creditor;
    }

    public async findById(id: String): Promise<Creditor>{
        const [creditor] = await this.ormRepository.find({where:{id}});
        return creditor;
    }

}