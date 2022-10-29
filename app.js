const express = require("express");
const port = 4000;
const app = express();
const userRouter = require('./routes/user.route');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', async (req, res, next) => {
    res.send('Selamat datang ...');
});

app.use('/users', userRouter);


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});