const express = require('express');

const app = express();

const port = 3005;

app.get('/', (req, res) => {
  res.send('Welcome to express-server');
});

app.get('/products', (req, res) => {
    res.send({
        products: [
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
    });
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});