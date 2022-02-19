const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Now express.js has the body-parser embebbed on it
app.use(express.urlencoded({ extended: false }));

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

app.use('/products', require('./routes/products'));

app.listen(PORT, () => console.log(`Server Listening on port ${PORT}`)); //Run node + express server on port 5000
