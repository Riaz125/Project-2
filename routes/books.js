var router = require('express').Router();
const passport = require('passport');
const bookCtrl = require('../controllers/books');

router.get('/', bookCtrl.index);
router.get('/new', bookCtrl.new);
router.post('/', bookCtrl.create);
router.get('/advancedsearch', bookCtrl.advancedSearchPage)
router.post('/advancedsearch', bookCtrl.searchResults)
router.get('/:id', bookCtrl.show);

module.exports = router;