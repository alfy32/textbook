angular.module('textbook').controller('headerCtrl',
  function ($scope, nav, users) {
    $scope.nav = nav.items;
    $scope.user = users.current;
  }
);