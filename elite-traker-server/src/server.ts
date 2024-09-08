import 'dotenv/config';
import express from 'express';
import { routes } from './routes';
import { setupMongo } from './datadase';
import cors from 'cors';

const PORT = 3333;
const app = express();

setupMongo()
  .then(() => {
    app.use(cors());
    app.use(express.json());
    app.use(routes);

    app.listen(PORT, () => console.log(`Connect ${PORT} 🚀`));
  })
  .catch((err) => {
    console.log(err.message);
  });
