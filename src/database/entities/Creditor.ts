import {
    Column, Entity, OneToMany, PrimaryGeneratedColumn
} from 'typeorm';

import Payment from './Payment';
  
@Entity({ name: 'creditor' })
class Creditor {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    name: string;
    
    @Column()
    cpf: string;

    @Column()
    status: string;

    @OneToMany(()=>Payment,(payment)=>payment.creditor)
    payment:Payment;
}
  
export default Creditor;