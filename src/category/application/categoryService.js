import { prisma } from "../../db.js";

//creacion de una categoria

export const CreatedCategory = async (categoryData, user) => {
  try {
    const { nameCategory } = categoryData;
    const categoryFound =await findCategoryByname(nameCategory);
    if(categoryFound) return ['el nombre de esta categoria ya existe']; 
    const newCategory = await prisma.category.create({
      data: {
        nameCategory,
        userId: user.id,
      },
      include:{
        user:true,
        products:true
      }
    });
    return newCategory;
  } catch (error) {
    console.log(error);
  }
};

//obtener todas las categorias del usuario

export const GetAllCategories =async (userid)=>{
  try {
    const getCatecories =await prisma.category.findMany({
      where:{
        userId:userid
      }
    })
    return getCatecories;
  } catch (error) {
    console.log(error);
  }
} 



//obtenemos solo una categoria de un usuario
export const getaCategory =async (categoryid,userid)=>{

  try {
    const getCategory =await prisma.category.findFirst({
      where:{
        id:Number(categoryid.id),
        userId:userid.id
      },
      include:{
        user:true
      }
    });

    if(!getCategory) return ['no se encontro o no exite la categoria'];
    return getCategory;
  } catch (error) {
    console.log(error);
  }
}

//editara una categoria 
export const editCategorybyid= async (categoryid,catergydata) =>{
  try {
    const categoryupdate = await prisma.category.update({
      where:{
        id:Number(categoryid.id)
      },
      data:catergydata
    });
    return categoryupdate;
  } catch (error) {
    console.log(error);
  }
}

//borrar una categoria por el id

export const deleteCategoryById=async (categoyid)=>{
  try {
    const deltecategory =await prisma.category.delete({
      where:{
        id:Number(categoyid.id)
      },
     
    });
    if(deleteCategoryById) return  ['la categoria fue eliminada exitosamente']
    return deltecategory;
  } catch (error) {
    console.log(error);
  }
}






//encontrar la categoria por el id

export const findcategorybyId = async (categoryID) => {
  try {
    const findCategory = await prisma.category.findUnique({
      where: {
        id: Number(categoryID),
      },
    });
    return findCategory;
  } catch (error) {
    console.log(error);
  }
};

//encontrar la categoria por el nombre
export const findCategoryByname =async(categoryname)=>{
  try {
    const findCategory = await prisma.category.findFirst({
      where:{
        nameCategory:categoryname
      }
    })
    return findCategory;
  } catch (error) {
    console.log(error)
  }
}