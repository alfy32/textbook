angular.module('textbook').controller('newCtrl',
  function ($scope, nav) {
    nav.makeActive('New');

    $scope.heading = "New Book";

  }
);