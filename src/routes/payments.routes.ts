import { Router } from 'express';
import PaymentController from 'controllers/PaymentController';

const paymentsRouter=Router();

paymentsRouter.get("/index", PaymentController.index);
paymentsRouter.post("/create", PaymentController.create);
paymentsRouter.get("/getRefused", PaymentController.getRefused);



export default paymentsRouter;