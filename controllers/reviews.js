const Book = require('../models/book');

module.exports = {
    create,
    edit
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

// function edit(req, res) {
//     Book.review.findById(req.params.id, function(err))
// }
