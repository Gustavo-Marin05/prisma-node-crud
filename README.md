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
(es opcional usar cualquier cliente rest para probar los siguientes enpoints)
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


CREACION DE UN PORDUCTO

con un metodo POST y con el siguiente enpoint se podra crear un producto
(siempre y cuando estes logeado)

enpoint:
http://localhost:3000/api/products

y en el body:

{
  "nameProduct":"chocolates",
  "stock":30,
  "price":1.5,
  "categoryId":"1"
}

y con eso se creara el nuevo proucto


OBTENER TODOS LOS PRODUCTOS
con el metodo GET y con el siguiente enpoint nos dara todos los producto que el usuario ha creado

enpoint: 
http://localhost:3000/api/products

en este caso nos mostrara los siguientes resultados 

[
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
    "id": 5,
    "nameProduct": "coca cola",
    "stock": 50,
    "price": 16,
    "userId": 4,
    "categoryId": 1,
    "createdAt": "2025-01-29T17:45:54.406Z",
    "updatedAt": "2025-01-29T17:45:54.406Z"
  },
  {
    "id": 6,
    "nameProduct": "coca cola",
    "stock": 50,
    "price": 16,
    "userId": 4,
    "categoryId": 1,
    "createdAt": "2025-01-29T17:45:55.962Z",
    "updatedAt": "2025-01-29T17:45:55.962Z"
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
  },
  {
    "id": 9,
    "nameProduct": "chocolates",
    "stock": 30,
    "price": 1.5,
    "userId": 4,
    "categoryId": 1,
    "createdAt": "2025-02-01T12:46:18.944Z",
    "updatedAt": "2025-02-01T12:46:18.944Z"
  }


OBTENER SOLO UN PRODUCTO 
con el metodo GET y con el siguiente enpoin obtendremos solo un producto que el usuario ha creado
y se mostraran mas informacion del producto

enpoint:
http://localhost:3000/api/products/9

resultado:

{
  "id": 9,
  "nameProduct": "chocolates",
  "stock": 30,
  "price": 1.5,
  "userId": 4,
  "categoryId": 1,
  "createdAt": "2025-02-01T12:46:18.944Z",
  "updatedAt": "2025-02-01T12:46:18.944Z",
  "user": {
    "id": 4,
    "fullname": "pinomarin",
    "username": "gus3",
    "password": "$2a$10$C8Gs1pN1kpWqaiOkJDVprupqzZQyYpykaLBm7UimuPgUHBsvVfgCy",
    "createdAt": "2025-01-29T02:27:43.655Z"
  },
  "category": {
    "id": 1,
    "nameCategory": "gaseosas de coca cola",
    "userId": 4,
    "createdAt": "2025-01-29T14:05:05.226Z",
    "updatedAt": "2025-01-29T16:22:44.722Z"
  }
}

comoo se puede ver este ya nos muestra mas informacion acerca del producto como el usuario y la categoria a la cula pertenece


EDICION DE UN PRODUCTO
con un metodo PUT y con el siguiente enpoint podremos editar la informacion acerca del producto como su nombre el precio la cantidad 
como tambien la categoria a la cual pertenece

enpoint: 
http://localhost:3000/api/products/9

body:
en este caso solo cambiaremos el nombre y la categoria

{
  "nameProduct":"chocolates sucre",
  "categoryId":"1"

}

resultado:
{
  "id": 9,
  "nameProduct": "chocolates sucre",
  "stock": 30,
  "price": 1.5,
  "userId": 4,
  "categoryId": 1,
  "createdAt": "2025-02-01T12:46:18.944Z",
  "updatedAt": "2025-02-01T13:02:43.496Z"
}

ELIMINACION DE UN PRODUCTO
con el metodo DELETE y con el siguiente enpoint podremos borrar todo sobre el producto

enpoint: 
http://localhost:3000/api/products/9

y se borrara todo el  producto e informacion

-----------------------------------------------------------------------------------------------------------------------------------

CREACION DE UNA VENTA

con el metodo POST y el sigueinte endpoint se podra crear una venta que tenga asociado al usuario que hizo la venta los productos 
que se esta llevando 

enpoint:

http://localhost:3000/api/sales

body:

{
  "products": [
    {
      "product": "1",
      "quantity": 2
    },
    {
      "product": "2",
      "quantity": 1
    }
  ]
}

y se creara la venta 


OBTENER TODAS LA VENTAS 
con el metodo GET y con el sigueinte enpoint obtendremos todas las ventas que hizo el usuario

endpoint:

http://localhost:3000/api/sales

los resultaso nos dara todas las ventas 

OBTENER SOLO UNA VENTA
con el metodo GET y el sigueinte enpoin obtendremos solo una venta del usuario que esta registrado

endpoint:
http://localhost:3000/api/sales/13
en este caso la venta con id= 13

resultado:

{
  "id": 13,
  "userId": 4,
  "totalAmount": 48,
  "createdAt": "2025-01-31T02:01:18.361Z",
  "updatedAt": "2025-01-31T02:01:18.361Z",
  "saleItems": [
    {
      "id": 25,
      "salesId": 13,
      "productId": 1,
      "price": 16,
      "quantity": 2
    },
    {
      "id": 26,
      "salesId": 13,
      "productId": 2,
      "price": 16,
      "quantity": 1
    }
  ]
}

nos dara el siguiente resultado con mas informacion



bueno por ahora se concluye la expliacion de uso de esta applicacion ,puedes hacer muchos cambios si quieres
como por ejemplo aplicar otro orm (order relational mapping) que como mencione antes estoy usando el orm de prisma

al hacer cambio de otro orm creoq que simplemente tendrias que hacer solamente los cambios en especial en el modelo de las tablas o aplicar una migracion de datos talvez

si quiere usar otro orm creo que los cambios serian mas en el service de cada carpte que lo nombre segun las tablas

se puede diferenciar claramente estan las carpetas de auth,products,category,sales

dentro de esas carpetas existen otras 3 carpetas las cuales son "applicarion,infrastructure,router" los cabios serian netamente nesesarios en la carpeta de "application"
ya que esta carpeta contiene un archivo llamado por su nombre de la tabla seguido de un service ejemplo (categoryService,produtService,authService,salesService)
dentro de esos archivos se encuentra la logica 
tomo encuenta que le falta mucho a esta aplicacion ya que falta algo importante como la generacion de facturas y su tabla de facturas en la base de datos

bueno eso seria todo por ahora gracias por leer esta pequeña documentacion y espero que te ayude en algo que quieras realizar o incorporar
lo mas seguro es que esto tal vez ya se hay subido a internet como una api rest


















