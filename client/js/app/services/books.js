angular.module('textbook').factory('books', 
  function ($http) {
    var map = {};
    var buy = [];
    var sell = [];

    function get() {
      $http.get('/books').then(function(data) {
        if(data.data.success) {
          buy.length = 0;
          sell.length = 0;
          var list = data.data.books;
          for(var i in list) {
            var book = list[i];
            map[book.isbn] = book;
            buy.push(book);
            sell.push(book);
          }
        } else {
          console.log('books get failed');
        }
      });
    }

    get();

    return {
      get: get,
      map: map,
      buy: buy,
      sell: sell
    };
  }
);