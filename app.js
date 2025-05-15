import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import routes from './src/routes/index.js';
import { PORT } from './src/config/config.js';
import { errorHandler } from './src/middlewares/errorHandler.js';




dotenv.config();

const app = express();


app.use(express.json());
app.use(morgan('dev'));
app.use('/api', routes);
app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`Servidor corriendo  en el puerto http://localhost:${PORT}`);
});
