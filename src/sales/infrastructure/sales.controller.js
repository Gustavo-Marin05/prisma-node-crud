import { createSales } from "../application/salesService.js";

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