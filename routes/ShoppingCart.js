const express = require('express');
const router = express.Router();
const goods = require('../db/model');

// define the home page route
// router.get('/', (req, res) => {
//   res.json({ message: 'information ShoppingCart' });
// });

router.get('/', async (req, res, next) => {
  try {
    const goodsAll = await goods.getAll();
    return res.json({
      status: 'success',
      code: 200,
      data: {
        goodsAll,
      },
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
