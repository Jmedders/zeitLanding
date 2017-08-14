app.controller("landingController", ["$scope", "$rootScope", "$routeParams", "$location", "$state", "$stateParams", "$window",
function($scope, $rootScope, $routeParams, $location, $state, $stateParams, $window){
  $scope.view = {};
  $scope.view.sayHello = "hello"
  console.log('hi there its me');
  console.log($state.current.name);
}])
