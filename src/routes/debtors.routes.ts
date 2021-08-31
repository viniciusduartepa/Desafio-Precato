import { Router } from 'express';
import DebtorController from 'controllers/DebtorController';

const debtorsRoutes=Router();

debtorsRoutes.get("/index", DebtorController.index);

debtorsRoutes.post("/create", DebtorController.create);



export default debtorsRoutes;