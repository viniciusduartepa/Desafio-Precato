import { Router } from 'express';
import PaymentController from 'controllers/PaymentController';

const paymentsRouter=Router();

paymentsRouter.get("/index", PaymentController.index);



export default paymentsRouter;