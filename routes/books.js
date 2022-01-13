var router = require('express').Router();
const passport = require('passport');
const bookCtrl = require('../controllers/books');

router.get('/', bookCtrl.index);
router.get('/new', bookCtrl.new);
router.post('/', bookCtrl.create);
router.get('/:id', bookCtrl.show);
// router.get('/advancedsearch', bookCtrl.advancedSearch)

module.exports = router;