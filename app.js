import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import {
  userRouter
} from './router';

const app = express();
const handleHome = (req, res) => {
  console.log('handleHome....');
  res.send('Home')
};

app.use(helmet());
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', handleHome);
app.use('/user', userRouter);

export default app;