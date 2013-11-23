angular.module('textbook').controller('sellCtrl',
  function ($scope, nav) {
    nav.makeActive('Sell');

    $scope.heading = "Welcome to the textbook website";
  }
);