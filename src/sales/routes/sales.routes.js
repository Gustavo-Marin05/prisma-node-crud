import { Router } from "express";
import { authRequired } from "../../middleware/validateToken.js";
import { SaleSave } from "../infrastructure/sales.controller.js";

const router =Router();

router.post('/sales',authRequired,SaleSave)//creacion de una venta


export default router;