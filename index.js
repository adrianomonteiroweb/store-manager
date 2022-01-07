const express = require('express');

const { insertProduct } = require('./controllers/products.controllers');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
const PORT = 3000;
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// cadastrar produto
app.post('/products', insertProduct);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
