import {
  CreatedCategory,
  deleteCategoryById,
  editCategorybyid,
  getaCategory,
  GetAllCategories,
} from "../application/categoryService.js";

//obtener todas las categorias de un usuario
export const CategoryCreate = async (req, res) => {
  try {
    const category = await CreatedCategory(req.body, req.user);
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json("error en createdCategory");
  }
};

//obtener todas las categorias de un usuario

export const Categories = async (req, res) => {
  try {
    const { id } = req.user;
    const category = await GetAllCategories(id);
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json("error en getallcategories");
  }
};

//obtener una sola categoria del usuario

export const Category = async (req, res) => {
  try {
    const id = req.params;
    const category = await getaCategory(id, req.user);
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json("error en getacategory");
  }
};

//editar una categoria 
export const Upcategory = async(req,res)=>{
    try {
        
        const category = await editCategorybyid(req.params,req.body)
        res.status(200).json(category);
    } catch (error) {
        res.status(400).json('error en editcategory'); 
    }
}

//eliminacion de una categoria 

export const DelCategory =async(req,res)=>{
    try {
        const category = await deleteCategoryById(req.params);
        res.status(200).json(category);
    } catch (error) {
        res.status(400).json('error en deletecategorybyid')
    }
}