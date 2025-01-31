import { checkCategoryExists, findcategorybyId } from "../../category/application/categoryService.js";
import { prisma } from "../../db.js";

//creacion del producto

export const CreateProduct = async (dataProduct, user) => {
  try {
    const { nameProduct, stock, price, categoryId } = dataProduct;

    const categoryFound = await findcategorybyId(categoryId);
    if (!categoryFound) return ["categoria no encontrada"];

    const findproductname = await findproductbyname(nameProduct);

    if (findproductname) return ["este producto ya existe"];

    const newProduct = await prisma.product.create({
      data: {
        nameProduct,
        stock,
        price,
        userId: user.id,
        categoryId: categoryFound.id,
      },
      include: {
        user: true,
        category: true,
      },
    });

    return newProduct;
  } catch (error) {
    console.log(error);
  }
};

//obtener todos los productos de un usuario

export const getallproducts = async (userId) => {
  try {
    const getproducts = await prisma.product.findMany({
      where: {
        userId: userId.id,
      },
    });
    return getproducts;
  } catch (error) {
    console.log(error);
  }
};

//obtener solo un producto con su id

export const getaProduct = async (productId, user) => {
  try {
    const findproduct=await findproductbyid(productId)
    if(!findproduct) return ['el producto no existe']
    const getproduct = await prisma.product.findUnique({
      where: {
        id: Number(productId.id),
        userId: user.id,
      },
      include: {
        user: true,
        category: true,
      },
    });

    return getproduct;
  } catch (error) {
    console.log(error);
  }
};



//editar todo el producto
export const UpdatedeProductbyId = async (productId, dataproduct) => {
  try {
    if (dataproduct.categoryId) {
      dataproduct.categoryId = Number(dataproduct.categoryId);
      
      // Verifica si la categoría existe
      const categoryExists = await checkCategoryExists(dataproduct.categoryId);
      if (!categoryExists) return ['la cateoria no existe']
    }

    const editproduct = await prisma.product.update({
      where: {
        id: Number(productId.id),
      },
      data: dataproduct,
    });
    return editproduct;
  } catch (error) {
    console.log(error);
    throw error; // Re-lanza el error para que sea capturado en la capa de controlador
  }
};

//elimina el producto
export const deleteproductbyid =async (productId)=>{
  try {
    const findproduct =await findproductbyid(productId);
    if(!findproduct) return ['el producto no existe']
    const delteProduct =await prisma.product.delete({
      where:{
        id:Number(productId.id)
      }
    })
    if(delteProduct) return ['el producto fue eliminado correctamente']
    return delteProduct;
  } catch (error) {
    console.log(error)
  }
}





//encuentra el producto por su nombre
const findproductbyname = async (nameproduct) => {
  try {
    const findproduct = await prisma.product.findFirst({
      where: {
        nameProduct: nameproduct,
      },
    });
    return findproduct;
  } catch (error) {
    console.log(error);
  }
};


//encuentra el producto por su id

export const findproductbyid =async (productid)=>{
  try {
    const findproduct = await prisma.product.findUnique({
      where : {
       id:Number(productid.id)
      }
    })
    return findproduct;
  } catch (error) {
    console.log(error)
  }
}