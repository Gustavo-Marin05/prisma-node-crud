import { prisma } from "../../db.js";
import { findproductbyid } from "../../products/application/productService.js";

export const createSales = async (userid, products) => {//este products es el req.body  en realidad deberia ser DataSale (dataventa)
  try {
    //solo nos aseguramos de que el producto es un array
    if (!Array.isArray(products)) {
      return res.status(400).json({ error: "Products debe ser un array" });
    }

    const totalAmount = await products.reduce(async (totalPromise, product) => {
      const total = await totalPromise;//este es un acumulador
      const dbProduct = await findproductbyid({ id: product.product });
      if (!dbProduct) return ['el producto no existe']
      return total + dbProduct.price * product.quantity;
    }, Promise.resolve(0));

    const saleItems = await Promise.all(
      products.map(async (product) => {
        const dbProduct = await findproductbyid({ id: product.product });
        return {
          productId: parseInt(product.product),
          price: dbProduct.price,
          quantity: product.quantity,
        };
      })
    );

    const saleSave = await prisma.sales.create({
      data: {
        userId: userid.id,
        totalAmount: totalAmount,
        saleItems: { create: saleItems },
      },
      include: { saleItems: true },
    });
    return saleSave;
  } catch (error) {
    console.log(error);
  }
};


export const getallsales=async (userID)=>{
  try {
    const sales=await prisma.sales.findMany({
      where:{
        userId:userID.id
      },
      include:{
        saleItems:true
      }
    })
    
    return sales;
  } catch (error) {
    console.log(error)
  }
}

export const getasale= async (saleId,userId)=>{
  try {
    const getsale= await prisma.sales.findUnique({
      where:{
        id:Number(saleId.id),
        userId:userId.id     
      },
      include:{
        saleItems:true
      }

    })
    return getsale;
  } catch (error) {
    console.log(error);
  }

}