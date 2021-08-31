import { Router } from 'express';
import CreditorController from 'controllers/CreditorController';

const creditorsRouter=Router();

creditorsRouter.get("/index", CreditorController.index);

creditorsRouter.post("/create", CreditorController.create);



export default creditorsRouter;