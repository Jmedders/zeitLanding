app.controller("landingController", ["$scope", "$rootScope", "$routeParams", "$location", "$state", "$stateParams", "$window",
function($scope, $rootScope, $routeParams, $location, $state, $stateParams, $window){
  $scope.view = {};
  $scope.$on('$routeChangeStart', function(next, current) {
    if($location.path() == '/call'){
      $('html, body').attr("style", "background: white;");
    }
    if($location.path() !== '/call'){
      $('html, body').attr("style", "background: rgb(8, 9, 11);")
      console.log('true');
    }
  });
}])
