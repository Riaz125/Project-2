const { populate } = require('../models/book');
const Book = require('../models/book');
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
    Book.create(req.body, function(err, bookDocument) {
        res.redirect('/books')
    })
}

function show(req, res) {
    Book.findById(req.params.id, function(err, bookDocument) {
        res.render('books/show', {
            title: "Book Detail",
            book: bookDocument
        });
    });
} 
// function show(req, res) {
// 	Flight.findById(req.params.id, function(err, book) {
//         Ticket.find({flight: flight._id}, function(err, tickets) {
// 	    res.render('books/show', { title: 'Book Detail', book: book, reviews: reviews })
//         });
// 	});
// }