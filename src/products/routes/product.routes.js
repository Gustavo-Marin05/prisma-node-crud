import { Router } from "express";
import { product, ProductDelete, Products, productSave, ProductUpdate } from "../infrastructure/product.controller.js";
import {authRequired} from '../../middleware/validateToken.js';

const router =Router();


router.post('/products',authRequired,productSave);//creacion de los productos 
router.get('/products',authRequired,Products)//obtendremos todos los productos del usuario
router.get('/products/:id',authRequired,product)//obtendrmos solo un producto
router.put('/products/:id',authRequired,ProductUpdate)//se editara un producto
router.delete('/products/:id',authRequired,ProductDelete)//elimina un producto

export default router;