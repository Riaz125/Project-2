const { populate } = require('../models/book');
const Book = require('../models/book');
const User = require('../models/user');
// const Review = require('../models/review')

module.exports = {
    index,
    new: newBooks,
    create,
    show
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
    // Book.findOne({'title': req.body.title})
    // .exec( function(err, foundBook) {
    //     if (err) { return next(err); }

    //     if (foundBook) {
    //   
    //       res.redirect();
    //     }
    //     else {
    Book.create(req.body, function(err, bookDocument) {
        res.redirect('/books')
    })
}

function show(req, res) {
    let user = req.user;
	Book.findById(req.params.id, function(err, book) {
        console.log(book.reviews.userId);
	    res.render('books/show', { title: 'Book Detail', book: book, user: user})
	});
}