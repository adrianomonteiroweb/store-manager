const express = require('express');

const app = express();
const PORT = 3000;
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// routers
const { products } = require('./routers');

// cadastrar produto
app.use('/products', products);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
