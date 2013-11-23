angular.module('textbook').controller('buyCtrl',
  function ($scope, $modal, nav, books) {
    nav.makeActive('Buy');

    $scope.heading = "Books that are currently for sale";

    $scope.predicate = 'title';
    $scope.reverse = false;

    $scope.books = books.buy;

    $scope.setPredicate = function(predicate) {
      if($scope.predicate != predicate) {
        $scope.predicate = predicate;
        $scope.reverse = false;
      }
      else 
        $scope.reverse = !$scope.reverse;
    };

    $scope.choose = function(isbn) {

      var modalInstance = $modal.open({
        templateUrl: 'views/buy-modal.html',
        controller: 'buyModalCtrl',
        resolve: {
          book: function () {
            return books.map[isbn];
          }
        }
      });

      modalInstance.result.then(function (returnValue) {
        console.log(returnValue);
      }, function () {
        console.info('Modal dismissed at: ' + new Date());
      });
    };
  }
);