import {
  deleteprofilebyid,
  edidprofilebyid,
  getprofile,
  loginUser,
  registerUser,
} from "../application/authService.js";

export const register = async (req, res) => {
  try {
    const user = await registerUser(req.body);

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json("error en registeruser");
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await loginUser(username, password);
    res.cookie("token", user.token);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json("error en loginuser");
  }
};

export const profile = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await getprofile(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json("error en getprofile");
  }
};

export const logout = async (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  res.sendStatus(200);
};


export const editprofile =async (req,res)=>{
  const id=req.user.id;
    const data =req.body;
  try {
  
    const user =await edidprofilebyid(id,data);
    res.status(200).json(user); 
    
  } catch (error) {
    res.status(400).json('error en editprofilebyid')
  }
}


export const delteprofile=async(req,res)=>{
  try {
    const {id}=req.user;
    const user= await deleteprofilebyid(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json('error en delteprofilebyid')
  }
}