const express = require("express");
const port = 4000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', async (req, res, next) => {
    res.send('Selamat datang ...');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});