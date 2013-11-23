angular.module('textbook').controller('mainCtrl',
  function ($scope, users) {
    $scope.title = "Textbooks";

    users.current.name = 'Dixie';
  }
);