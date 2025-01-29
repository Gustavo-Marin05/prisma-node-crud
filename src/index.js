import express from 'express';
import authRoutes from './auth/routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
const app = express();

// Utiliza el puerto definido en la variable de entorno o el puerto 3000 por defecto
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'))

app.use('/api', authRoutes);//todas las rutas de autentificacion

app.listen(PORT, () => {
  console.log(`Conectado al puerto ${PORT}`);
});
