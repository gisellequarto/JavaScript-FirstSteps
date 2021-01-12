const port = 3303;
const express = require('express');
const app = express()

app.get('/products', (req, res, next) => {
    res.send({name: 'Notebook', price: 245.99}) //will convert to JSON
})

app.listen(port, () => {
     console.log(`Server executing in the port ${port}.`)
})