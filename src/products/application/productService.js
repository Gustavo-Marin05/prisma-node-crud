import { findcategorybyId } from "../../category/application/categoryService.js";
import { prisma } from "../../db.js"; 


//creacion del producto

export const CreateProduct = async (dataProduct, user) => {

  try {
    const { nameProduct, stock, price, category } = dataProduct;

    const categoryFound = await findcategorybyId(category);
    if (!categoryFound) return ["categoria no encontrada"];

    const newProduct = await prisma.produc.create({
        data:{
            nameProduct,
            stock,
            price,
            userId:user.id,
            category:categoryFound.id,
        },
        include:{
            user:true,
            category:true
        }
    })

    return newProduct;


  } catch (error) {
    console.log(error);
  }
};
