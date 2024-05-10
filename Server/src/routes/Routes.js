
const express = require('express');
const userController = require('../controller/userController');
const LoginUser = require('../controller/userController');
const ProductsController = require('../controller/ProductsController')
const routes = express.Router();


// Add routes
 routes.post('/signup',userController.CreateUser);
 routes.post('/signin',userController.LoginUser);


 routes.get('/getproducts',ProductsController.getProducts);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = routes;

