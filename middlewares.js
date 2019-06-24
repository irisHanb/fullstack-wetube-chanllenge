import routes from './routes';

export const localsMidleware = (req, res, next) => {
  res.locals.siteName = 'WeTube';
  res.locals.routes = routes;
  next();
};
