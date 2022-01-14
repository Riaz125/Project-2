const { populate } = require('../models/book');
const Book = require('../models/book');
const User = require('../models/user');
// const Review = require('../models/review')

module.exports = {
    index,
    new: newBooks,
    create,
    show,
    advancedSearchPage,
    searchResults
}

function index (req, res) {
    Book.find({}, function(err, bookDocuments) {
        res.render('books/index', {
            title: 'All Books',
            books: bookDocuments
        })
    })
}

function newBooks (req, res) {
    res.render('books/new.ejs', {title: 'Add Books'});
}

function create(req, res) {
    Book.create(req.body, function(err, bookDocument) {
        res.redirect('/books')
    })
}

function show(req, res) {
    let user = req.user;
	Book.findById(req.params.id, function(err, book) {
	    res.render('books/show', { title: 'Book Detail', book: book, user: user})
	});
}

function advancedSearchPage(req, res) {
    res.render('books/advancedsearch.ejs', {title: "Advanced Search"})
}

function searchResults(req, res) {
    if ((req.body.genres) && (req.body.categories)) {
        Book.find({ genres: { $all: req.body.genres}, categories: { $all: req.body.categories}, releaseYear:  {$gte:req.body.releaseYear[0], $lte: req.body.releaseYear[1]} }, function(err, bookDocuments) {
            res.render('books/searchresults', {
                title: 'All Books',
                books: bookDocuments
            })
        })
    } else if (req.body.categories) {
        Book.find({categories: {$all: req.body.categories}, releaseYear:  {$gte:req.body.releaseYear[0], $lte: req.body.releaseYear[1]}}, function(err, bookDocuments) {
            res.render('books/searchresults', {
                title: 'All Books',
                books: bookDocuments
            })
        })
    } else if (req.body.genres) {
        Book.find({genres: {$all: req.body.genres}, releaseYear:  {$gte:req.body.releaseYear[0], $lte: req.body.releaseYear[1]}}, function(err, bookDocuments) {
            res.render('books/searchresults', {
                title: 'All Books',
                books: bookDocuments
            })
        })
    } else {
        Book.find({releaseYear:  {$gte:req.body.releaseYear[0], $lte: req.body.releaseYear[1]}}, function(err, bookDocuments) {
            res.render('books/searchresults', {
                title: 'All Books',
                books: bookDocuments
            })
        })
    }
}