const express = require('express');
const app = express();

const db = require('../db/db');
const ShoppingCart = require('../routes/ShoppingCart');

// const ShoppingCart = require('../src/components/ShoppingCart/ShoppingCart');
// import ShoppingCart from '../src/components/ShoppingCart';

const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World!!!');
});

app.use('/ShoppingCart', ShoppingCart);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

// app.use('/ShoppingCart', () => {
//   <ShoppingCart />;
// });

db.then(() => {
  app.listen(PORT, () => {
    console.log(`Server running. Use our API on port: ${PORT}`);
  });
}).catch(err => {
  console.log(`Server not running. Error message ${err.message}`);
  process.exit(1);
});
