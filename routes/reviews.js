const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
reviewsCtrl

router.post('/books/:id/reviews', reviewsCtrl.create);
router.put('/reviews/:id', reviewsCtrl.edit);
 
module.exports = router;