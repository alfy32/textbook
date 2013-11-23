angular.module('textbook').directive('header',
  function () {

    return {
      replace: true,
      templateUrl: 'views/header.html',
      controller: 'headerCtrl'
    };
  }
);