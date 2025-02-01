import { Router } from "express";
import { authRequired } from "../../middleware/validateToken.js";
import { GetSale, GetSales, SaleSave } from "../infrastructure/sales.controller.js";

const router =Router();

router.post('/sales',authRequired,SaleSave)//creacion de una venta
router.get('/sales',authRequired,GetSales)//nos dara todas las ventas
router.get('/sales/:id',authRequired,GetSale)//nos dara solo una venta


export default router;