import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

import connectDB from '../config/database';
import {
  errorResponder,
  invalidPathHandler,
} from './middlewares/error-handling';
import AppRouter from './routes';

const app = express();
const router = new AppRouter(app);

connectDB();

app.set('port', process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

router.init();

app.use(errorResponder);
app.use(invalidPathHandler);

const port = app.get('port');
const server = app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

export default server;
