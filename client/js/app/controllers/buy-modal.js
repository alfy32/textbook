angular.module('textbook').controller('buyModalCtrl', 
  function ($scope, $modalInstance, book) {

    $scope.book = book;

    $scope.ok = function () {
      $modalInstance.close('close');
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    }
  }
);