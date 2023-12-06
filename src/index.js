const express = require('express');

const app = express();

const port = 3005;
const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 123
    },
    {
        id: 2,
        name: 'Product 2',
        price: 456
    },
    {
        id: 3,
        name: 'Product 3',
        price: 789
    }
]

app.get('/', (req, res) => {
  res.send('Welcome to express-server');
});

app.get('/products', (req, res) => {
    res.send({
        products : products
    });
})

app.get('/products/:id', (req, res) => {
    try {
        const id = Number(req.params.id);
        const product = products.find((product) => product.id === id);
        if (!product) {
            res.status(404).send(`product not found with id: ${id}`)
        }
        res.status(200).send({
            product : product
        });
    } catch (error) {
        res.status(500).send('error')
    }
    
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});