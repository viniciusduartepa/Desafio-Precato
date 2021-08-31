import {
    Column, Entity, OneToMany, PrimaryGeneratedColumn
} from 'typeorm';

import Payment from './Payment';
  
@Entity({ name: 'debtor' })
class Debtor {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    name: string;
    
    @Column()
    cnpj: string;

    @OneToMany(()=>Payment,(payment)=>payment.debtor)
    payment:Payment;
}
  
export default Debtor;