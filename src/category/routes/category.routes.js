import { Router } from "express";
import { Categories, Category, CategoryCreate, DelCategory, Upcategory } from "../infrastructure/category.controller.js";
import { authRequired } from "../../middleware/validateToken.js";

const router=Router();


router.post('/category',authRequired,CategoryCreate);//creacion de la categoria
router.get('/category',authRequired,Categories);//obtendremos todas las categorias de un user
router.get('/category/:id',authRequired,Category);//obtiene una sola categoria con mas datos
router.put('/category/:id',authRequired,Upcategory)//edia una categoria
router.delete('/category/:id',authRequired,DelCategory)//eliminacion de una categoria
export default router;
