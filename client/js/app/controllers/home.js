angular.module('textbook').controller('homeCtrl',
  function ($scope, nav) {
    nav.makeActive('Home');

    $scope.navs = nav.items;
    
    $scope.heading = "Welcome to the textbook website";
  }
);