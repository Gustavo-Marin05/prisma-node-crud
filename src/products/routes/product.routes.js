import { Router } from "express";
import { productSave } from "../infrastructure/product.controller.js";
import {authRequired} from '../../middleware/validateToken.js';

const router =Router();


router.post('/product',authRequired,productSave);

export default router;