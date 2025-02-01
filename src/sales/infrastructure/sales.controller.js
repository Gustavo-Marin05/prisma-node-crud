import { createSales, getallsales, getasale } from "../application/salesService.js";

export const SaleSave = async (req, res) => {
    try {
      const { products } = req.body;  // Extraemos los productos del cuerpo de la solicitud
      const sales = await createSales(req.user, products);  // Pasamos el usuario y los productos a la función createSales
      res.status(200).json(sales);
    } catch (error) {
      console.error('Error en createSales:', error);
      res.status(400).json({ error: 'Error al crear la venta' });
    }
  };

//obtendremos todas las ventas que realizo el usuario

  export const GetSales =async (req,res)=>{
    try {
      const sales=await getallsales(req.user)
      res.status(200).json(sales);
    } catch (error) {
      res.status(400).json('error en getallsales')
    }
  }
  

  //obtendremos solo una venta que realizo el usuario

  export const GetSale=async (req,res)=>{
    try {
      const sales=await getasale(req.params,req.user);
      res.status(200).json(sales);
    } catch (error) {
      res.status(400).json('error en getasale');
    }
  }