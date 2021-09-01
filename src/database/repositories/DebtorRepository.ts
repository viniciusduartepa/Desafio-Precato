import {getRepository,Repository} from 'typeorm'

import Debtor from 'database/entities/Debtor';

export default class DebtorRepository{
    private ormRepository:Repository<Debtor>;
    constructor(){
        this.ormRepository=getRepository(Debtor);
    }

    public async index(){
        const debtors=await this.ormRepository.find()
        return debtors;
    }

    public async create(model: Debtor): Promise<Debtor> {
        const debtor = this.ormRepository.create(model);
        const createddebtor = await this.ormRepository.save(debtor);
    
        return createddebtor;
    }

    public async findByCnpj(cnpj: String): Promise<Debtor>{
        const [debtor] = await this.ormRepository.find({where:{cnpj}});
        return debtor;
    }
    public async findById(id: String): Promise<Debtor>{
        const [debtor] = await this.ormRepository.find({where:{id}});
        return debtor;
    }
    
}