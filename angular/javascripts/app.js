var app = angular.module('landingApp', ['ngRoute', 'ui.router']);

app.config(function($routeProvider, $urlRouterProvider, $stateProvider, $httpProvider, $locationProvider){
  // $urlRouterProvider.otherwise('/');
  $routeProvider
  .when('/', {
    templateUrl: 'angular/partials/home.html'
  })
  .when('/fathoms', {
    templateUrl: 'angular/partials/fathoms.html'
  })
  .when('/about', {
    templateUrl: 'angular/partials/about.html'
  })
  .when('/editors', {
    templateUrl: 'angular/partials/editors.html'
  })
  .when('/signup', {
    templateUrl: 'angular/partials/signup.html'
  })
  .when('/call', {
    templateUrl: 'angular/partials/call.html'
  })
  .when('/privacy', {
    templateUrl: 'angular/partials/privacy.html'
  })
  .when('/terms', {
    templateUrl: 'angular/partials/terms.html'
  })
  .otherwise( { redirectTo: '/' } );
  // $locationProvider.html5Mode(true);
})
