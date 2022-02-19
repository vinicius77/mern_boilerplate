const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
const PORT = process.env.PORT || 5000;

const DUMMY_PRODUCTS = []; //in-memory storage data

app.use(express.json()); // Now express.js has the body-parser embebbed on it

// CORS Headers => Required for cross-origin- cross-server communication
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	);
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
	next();
});

app.get('/products', (req, res, next) => {
	res.status(200).json({ products: DUMMY_PRODUCTS });
});

app.post('/product', (req, res, next) => {
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
});

app.listen(PORT, () => console.log(`Server Listening on port ${PORT}`)); //Run node + express server on port 5000
