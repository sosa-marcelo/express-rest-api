const express = require('express');

const router = express.Router();

// More complex endpoint with multiple dynamic values
router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
    name: `Product`,
    price: 3000,
  });
});

module.exports = router;
