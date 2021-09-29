const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const buyerRoute = require('./buyers.route');
const sellerRoute = require('./sellers.route');
const orderRoute = require('./orders.route');
const productRoute = require('./products.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/buyers',
    route: buyerRoute,
  },
  {
    path: '/sellers',
    route: sellerRoute,
  },
  {
    path: '/products',
    route: productRoute,
  },
  {
    path: '/orders',
    route: orderRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
