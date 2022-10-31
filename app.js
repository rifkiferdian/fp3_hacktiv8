const express = require("express");
const app = express();
require('dotenv').config()
const fs = require('fs');
const userRouter = require('./routes/user.route');
const categoryRouter = require('./routes/category.route');
const productRouter = require('./routes/product.route');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', async (req, res, next) => {
    res.send('Selamat datang ...');
});

app.use('/users', userRouter);
app.use('/categories', categoryRouter);
app.use('/products', productRouter);


app.listen(process.env.PORT, () => {
  console.log(`App listening at http://localhost:${process.env.PORT}`);
});