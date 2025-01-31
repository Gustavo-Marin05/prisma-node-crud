import {
  CreateProduct,
  deleteproductbyid,
  getallproducts,
  getaProduct,
  UpdatedeProductbyId,
} from "../application/productService.js";

export const productSave = async (req, res) => {
  try {
    const product = await CreateProduct(req.body, req.user);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json("error en createproduct");
  }
};

//obtener todos los productos de l usuario

export const Products = async (req, res) => {
  try {
    const product = await getallproducts(req.user);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json("error en getallproducts");
  }
};

//obtendremos solo un producto

export const product = async (req, res) => {
  try {
    const product = await getaProduct(req.params, req.user);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json("error en getpeoduct");
  }
};

//edicion de un produco

export const ProductUpdate = async (req, res) => {
  try {
    const products = await UpdatedeProductbyId(req.params, req.body);
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json("error en updateproductbyid");
  }
};


//eliminacion de un producto

export const ProductDelete =async (req,res)=>{
  try {
    
    const product =await deleteproductbyid(req.params);
    res.status(200).json(product)
  } catch (error) {
    res.status(400).json('error ek deleteproductbyid')
  }
}