este es un proyecto de backend 
hecho con las siguientes tecnologias 
nodejs , javascript , prisma(orm)
y se tomo como base de datos SQLite

esta aplicacion es un sistema de ventas que se encarga de gestionar los productos de una venta
tambien se incorpora un metodo de autentificion para los usuario que estan logeados o que se quieren registrar



si quieres probar la aplicacion deberas descargar el zip o simplemmente clonar el repositorio

despues de clonar o descargar el zip se debera instalar todas las dependencias con un simple comando que es:  
npm install

despues que de se hallan instalado todas las dependencias puedes proceder a ejecutar la app
para ejecutar la app se nesecitara el siguiente comando

npm run dev

una vez ejecutado la app puedes interactuar con los siguientes endpoits
(es opcional en donde quieres probar la api en mi caso escoji thunderclient o puedes elegir otro como postman)
---------------------------------------------------------------------------------------------------
REGISTRO DE USUARIO 
con un metodo POST al siguiente endpoint

http://localhost:3000/api/register

y despues en el body colocar lo siguiente 

{
  "fullname":"nombre_el_que_desees",
  "username":"un_nombre_de_usuario",
  "password":"una_contraceña_que_recuerdes"
}

-----------------------------------------------------------------------------------------------------
LOGIN DE UN USUARIO EXISTENTE O YA REGISTRADO
en este caso puedes iniciar secion con el username y el password con el siguiente endpoint
lo mismo con el metodo POST

  http://localhost:3000/api/login

  en el body:
  {
  "username":"nombre_de_usuario",
  "password":"ontraceña_que_insertaste"
  }

o simplemente quieres entrar con un usuario ya probado se tendria que colocar en el body lo siguiente
 {
  "username":"gus3",
  "password":"12345678"
  }
------------------------------------------------------------------------------------------------------
  
CRUD COMPLETO DE CATEGORIAS

CREACION DE UNA CATEGORIA:
con un metodo POST y el siguiete endpoint

http://localhost:3000/api/category

body:
{
  "nameCategory":"pan queques"
}

con esto se creara una nueva categoria


OBTENER TODAS LAS CATEGORIAS
en esta seccion obtendremos todas las categorias de un usuario

con un metodo GET y el siguiente endpoint

http://localhost:3000/api/category

en este caso nos devolvera todas las categorias que estan asociadas a un usuario
un ejemplo de como se veria 

{
    "id": 1,
    "nameCategory": "gaseosas de coca cola",
    "userId": 4,
    "createdAt": "2025-01-29T14:05:05.226Z",
    "updatedAt": "2025-01-29T16:22:44.722Z"
  },
  {
    "id": 3,
    "nameCategory": "sodas",
    "userId": 4,
    "createdAt": "2025-01-29T14:09:58.923Z",
    "updatedAt": "2025-01-29T14:09:58.923Z"
  },
  {
    "id": 4,
    "nameCategory": "frituras",
    "userId": 4,
    "createdAt": "2025-01-29T14:11:32.826Z",
    "updatedAt": "2025-01-29T14:11:32.826Z"
  }

todo dentro de un array


OBTENER SOLO UNA CATEGORIA 
con un metodo GET y el siguiente enpoint 

http://localhost:3000/api/category/"id"  

en la parte de id se colocara el numero de id de la categoria que se quiera ver en este caso sera el 3


http://localhost:3000/api/category/3


nos devolvera lo siguiente:

{
  "id": 3,
  "nameCategory": "sodas",
  "userId": 4,
  "createdAt": "2025-01-29T14:09:58.923Z",
  "updatedAt": "2025-01-29T14:09:58.923Z",
  "user": {
    "id": 4,
    "fullname": "pinomarin",
    "username": "gus3",
    "password": "$2a$10$C8Gs1pN1kpWqaiOkJDVprupqzZQyYpykaLBm7UimuPgUHBsvVfgCy",
    "createdAt": "2025-01-29T02:27:43.655Z"
  },
  "products": 
    {
      "id": 1,
      "nameProduct": "coca cola",
      "stock": 50,
      "price": 16,
      "userId": 4,
      "categoryId": 3,
      "createdAt": "2025-01-29T17:39:26.400Z",
      "updatedAt": "2025-01-29T17:39:26.400Z"
    },
    {
      "id": 2,
      "nameProduct": "coca cola",
      "stock": 50,
      "price": 16,
      "userId": 4,
      "categoryId": 3,
      "createdAt": "2025-01-29T17:39:32.167Z",
      "updatedAt": "2025-01-29T17:39:32.167Z"
    },
    {
      "id": 4,
      "nameProduct": "coca cola",
      "stock": 50,
      "price": 16,
      "userId": 4,
      "categoryId": 3,
      "createdAt": "2025-01-29T17:40:10.522Z",
      "updatedAt": "2025-01-29T17:40:10.522Z"
    },
    {
      "id": 7,
      "nameProduct": "cacahuates",
      "stock": 50,
      "price": 16,
      "userId": 4,
      "categoryId": 3,
      "createdAt": "2025-01-29T17:49:38.908Z",
      "updatedAt": "2025-01-29T17:49:38.908Z"
    },
    {
      "id": 8,
      "nameProduct": "papel higienico",
      "stock": 50,
      "price": 16,
      "userId": 4,
      "categoryId": 3,
      "createdAt": "2025-01-29T17:58:54.720Z",
      "updatedAt": "2025-01-29T17:58:54.720Z"
    }
  ]
}
como se puede ver esto nos devuelve la categoria pero ya con mas informacion como a que usuario pertenece y los productos que tiene



EDICION DE UN PRODUCTO 

con un metodo PUT y con el siguiente enpoint podras editar el nombre de la categoria

http://localhost:3000/api/category/5

en el body:

{
  "nameCategory":"panqueques de masa"
  
}


ELIMIMACION DE UNA CATEGORIA
con un metodo DELETE y con el siguiente enpoint se borrara toda la categoria

http://localhost:3000/api/category/5

y se borrara esa categoria en este caso la categoria con el id=5 

---------------------------------------------------------------------------------------------------------------------------------------


CRUD COMPLETO DE PRODUCTOS 



