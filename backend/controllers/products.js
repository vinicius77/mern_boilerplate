const { v4: uuidv4 } = require('uuid');

const DUMMY_PRODUCTS = []; //in-memory storage data

const getProducts = async (req, res) => {
	res.status(200).json({ products: DUMMY_PRODUCTS });
};

const createProduct = async (req, res) => {
	const { title, price } = req.body;

	if (!title || title.trim().length === 0 || !price || price <= 0) {
		return res.status(422).json({
			message: 'Invalid input, please enter a valid title and/or price.',
		});
	}

	const createdProduct = {
		id: uuidv4(),
		title,
		price,
	};

	DUMMY_PRODUCTS.push(createdProduct);

	res.status(201).json({ message: 'Created New Product', product: createdProduct });
};
module.exports = {
	createProduct,
	getProducts,
};
