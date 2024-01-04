const express = require('express');
const app = express();

app.get('/product/:productId', (req, res) => {
  const productId = req.params.productId; 
  res.status(200).json({ "productId": productId });
  
});

module.exports = app;
