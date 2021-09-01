import {
    Column, Entity, ManyToOne, PrimaryGeneratedColumn,JoinColumn
} from 'typeorm';

import Debtor from './Debtor';
import Creditor from './Creditor';
  
@Entity({ name: 'payment' })
class Payment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    remessa: String;
    
    @Column({name:"inital_value"})
    initialValue: number;
    
    @Column({name:"final_value"})
    finalValue: number;

    @Column()
    data: Date;
    
    @Column()
    status: string;

    @Column()
    reason: string;

    @ManyToOne(()=>Creditor,(creditor)=>creditor.payment)
    @JoinColumn({name:"creditor_id"})
    creditor:Creditor;

    @ManyToOne(()=>Debtor,(debtor)=>debtor.payment)
    @JoinColumn({name:"debtor_id"})
    debtor:Creditor;

}
  
export default Payment;