import { prisma } from "../../db.js"; // Importa desde db.js
import bcrypt from "bcryptjs";
import { createaccestoken } from "../../libs/jwt.js";

export const registerUser = async (userData) => {
  const { fullname, username, password } = userData;
  try {
    const userFound = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (userFound) return ["Este nombre de usuario ya está en uso"];

    // Asegúrate de que la contraseña esté definida antes de hashearla
    if (!password) throw new Error("La contraseña es requerida");

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        fullname,
        username,
        password: passwordHash, // Pasa la contraseña hasheada como una cadena
      },
    });

    const token = await createaccestoken({ id: newUser.id });

    return {
      id: newUser.id,
      fullname: newUser.fullname,
      username: newUser.username,
      password: newUser.password,
      createdAt: newUser.createdAt,
      token,
    };
  } catch (error) {
    console.log(error);
    throw new Error("Error en el registro del usuario");
  }
};

export const loginUser = async (username, password) => {
  try {
    const userFound = await prisma.user.findUnique({ where: { username } });
    if (!userFound) return ["no existe el nombre usuario"];

    const isMach = await bcrypt.compare(password, userFound.password);
    if (!isMach) return ["la contraceña es incorrecta"];

    const token = await createaccestoken({ id: userFound.id });

    return {
      id: userFound.id,
      fullname: userFound.fullname,
      username: userFound.username,
      createdAt: userFound.createdAt,
      token,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getprofile = async (userID) => {
  try {
    const userFound = await prisma.user.findUnique({ where: { id: userID } });

    if (!userFound) return ["usuario no existe"];
    return {
      id: userFound.id,
      fullname: userFound.fullname,
      username: userFound.username,
      createdAt: userFound.createdAt,
    };
  } catch (error) {
    console.log(error);
  }
};

export const edidprofilebyid = async (userID, data) => {
  try {
    if (data.password) {
       // Número de rondas de sal para el hashing
      data.password = await bcrypt.hash(data.password, 10);
    }

    const useredit = await prisma.user.update({
      where: { id: userID },
      data: data,
    });
    if (useredit) return ["usuario editados exitosamente"];
    return useredit;
  } catch (error) {
    console.log(error);
  }
};

export const deleteprofilebyid = async (userID) => {
  try {
    const userdelete = await prisma.user.delete({
      where: {
        id: userID,
      },
    });

    if (userdelete) return ["usuario borrado exitosamente"];
    return userdelete;
  } catch (error) {
    console.log(error);
  }
};
