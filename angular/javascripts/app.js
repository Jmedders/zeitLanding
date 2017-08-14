var app = angular.module('landingApp', ['ngRoute', 'ui.router']);

app.config(function($routeProvider, $urlRouterProvider, $stateProvider, $httpProvider, $locationProvider){
  // $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('landing', {
    url: '/',
    templateUrl: 'angular/partials/home.html'
  })
  .state('fathoms', {
    url: '/fathoms',
    templateUrl: 'angular/partials/fathoms.html'
  })
  .state('about', {
    url: '/about',
    templateUrl: 'angular/partials/about.html'
  })
  .state('editors', {
    url: '/editors',
    templateUrl: 'angular/partials/editors.html'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'angular/partials/signup.html'
  })
})
