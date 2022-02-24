const express = require('express');
const userRoute = require('./users');
const router = express.Router();

const defaultRoutes = [
  {
    path: '/users',
    route: userRoute,
  },
];

router.get('/ping',(req, res) => res.send('pong'));

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});


module.exports = router;