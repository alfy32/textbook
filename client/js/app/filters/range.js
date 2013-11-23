angular.module('textbook').filter('range', function() {
  return function (objects, which, lower, upper) {
    var filtered_list = [];

    if(lower === undefined && upper === undefined) {
      return objects;
    }

    if(lower === undefined) lower = Number.MIN_VALUE;
    if(upper === undefined) upper = Number.MAX_VALUE;

    for (var i = 0; i < objects.length; i++) {
      if (objects[i][which] >= lower && objects[i][which] <= upper) {
        filtered_list.push(objects[i]);
      }
    }

    return filtered_list;
  }
});