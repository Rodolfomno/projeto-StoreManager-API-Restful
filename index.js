require('dotenv').config();
const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const productsRouter = require('./router/productsRouter');
const salesRouter = require('./router/salesRouter');

const app = express();
app.use(express.json());

app.use('/products', productsRouter);
app.use('/sales', salesRouter);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});

app.use(errorHandler);
