app.controller("landingController", ["$scope", "$rootScope", "$routeParams", "$location", "$state", "$stateParams", "$window",
function($scope, $rootScope, $routeParams, $location, $state, $stateParams, $window){
  $scope.view = {};
  $scope.$on('$routeChangeStart', function(next, current) {
    if($location.path() == '/privacy' || $location.path() == '/terms'){
      $('html, body').attr("style", "background: white; color: #000;");
    }
    if($location.path() !== '/privacy' && $location.path() !== '/terms'){
      $('html, body').attr("style", "background: rgb(8, 9, 11); color: #fff")
    }
  });
}])
