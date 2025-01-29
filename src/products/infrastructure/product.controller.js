import { CreateProduct } from "../application/productService.js";

export const productSave=(req,res)=>{
    try {
        const produc = CreateProduct(req.body,req.user);
        res.status(200).json(produc);
    } catch (error) {
        res.status(400).json('error en createproduct');
    }
}