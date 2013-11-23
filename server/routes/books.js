var books = require('../data/books.json');

module.exports = function(app) {
  app.get('/books', function(req, res) {
    res.send({
      success: true,
      books: books
    });
  });
};