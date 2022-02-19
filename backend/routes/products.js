const express = require('express');
const router = express.Router();

const { createProduct, getProducts } = require('../controllers/products');

router.route('/').get(getProducts).post(createProduct);

module.exports = router;
