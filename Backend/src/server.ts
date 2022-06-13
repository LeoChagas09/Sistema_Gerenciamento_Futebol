import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(routes);

app.use(express.json());
app.use(cors());

app.listen(3333, () => {
  console.log('Server running on port 3333');
});
