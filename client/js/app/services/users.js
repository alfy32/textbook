angular.module('textbook').factory('users', 
  function () {
    var users = {};

    users.current = {
      name: 'User'
    };

    return users;
  }
);
