import { Router } from "express";
import { register,login,profile ,logout, editprofile, delteprofile} from "../infrastructure/auth.controller.js";
import {authRequired} from '../../middleware/validateToken.js'

const route = Router();

route.post("/register", register); //para registrar un usuario
route.post('/login',login)//el usuario hace login 
route.post('/logout',logout)//se saldra del perfil
route.get("/profile",authRequired,profile);//si este autentificado podra entrar a su perfil
route.put('/profile',authRequired,editprofile)//se editara el perfil
route.delete('/profile',authRequired,delteprofile)//se borrara el perfil

export default route;
