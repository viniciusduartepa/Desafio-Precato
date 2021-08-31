import express,{ Router } from 'express';
import { createConnection } from 'typeorm';

import paymentsRouter from 'routes/payments.routes';
import creditorsRouter from 'routes/creditors.routes';
import debtorsRoutes from 'routes/debtors.routes';

(async ()=>{
    await createConnection();
    const app=express();


app.use(express.json());

app.use('/payments',paymentsRouter);
app.use('/creditors',creditorsRouter);
app.use('/debtors', debtorsRoutes);

app.listen(3333,()=>{console.log("App is Listening on Port 3333")});
})()