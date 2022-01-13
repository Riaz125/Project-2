const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
reviewsCtrl

router.post('/books/:id/reviews', reviewsCtrl.create);
router.put('/reviews/:id', reviewsCtrl.edit);
router.delete('/reviews/:id', reviewsCtrl.delete);
 
module.exports = router;