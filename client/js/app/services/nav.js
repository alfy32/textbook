var nav = [
  {
    name: 'Home',
    state: 'home',
    active: true,
    url: '/',
    ctrl: 'homeCtrl',
    tmpl: 'views/home.html'
  },
  {
    name: 'Buy',
    active: false,
    url: '/buy',
    ctrl: 'buyCtrl',
    tmpl: 'views/books.html'
  },
  {
    name: 'Sell',
    active: false,
    url: '/sell',
    ctrl: 'sellCtrl',
    tmpl: 'views/books.html'
  },
  {
    name: 'New',
    active: false,
    url: '/new',
    ctrl: 'newCtrl',
    tmpl: 'views/new.html'
  }
];

angular.module('textbook').factory('nav',
  function () {

    function makeActive(name) {
      for(var i in nav) {
        if(nav[i].name == name) 
          nav[i].active = true;
        else 
          nav[i].active = false;
      }
    }

    return {
      items: nav,
      makeActive: makeActive
    };
  }
);
