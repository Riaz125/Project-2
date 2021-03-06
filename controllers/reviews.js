const Book = require('../models/book');

module.exports = {
    create,
    edit,
    delete: deleteReview
}

function create(req, res) {
    let newReview = {
        userId: req.user._id,
        userName: req.user.name,
        content: req.body.content,
        rating: req.body.rating
      };
    console.log(req.user);
    Book.findById(req.params.id, function(err, bookDocument){
        bookDocument.reviews.push(newReview);
        bookDocument.save(function(err){
            res.redirect(`/books/${bookDocument._id}`);
        });
    })
}

function edit(req, res) {
     Book.findOne({'reviews._id': req.params.id}, function(err, bookDocument){

        const review = bookDocument.reviews.id(req.params.id);
        if(!review.userId.equals(req.user._id)) return res.redirect(`/books/${bookDocument._id}`);

        review.content = req.body.content;
        review.rating = req.body.rating;

        bookDocument.save(function(err){
            res.redirect(`/books/${bookDocument._id}`)
        });
     });
}

function deleteReview(req, res) {
    Book.findOne(
      {'reviews._id': req.params.id, 'reviews.userId': req.user._id},
      function(err, book) {
        if (!book || err) return res.redirect(`/books/${book._id}`);
        book.reviews.remove(req.params.id);
        book.save(function(err) {
          res.redirect(`/books/${book._id}`);
        });
      }
    );
  }