var app = angular.module('myFetch', []);
app.controller('fetchCtrl', function($scope, $http) {
  $http.get("fetch.php").then(function (response) {
      $scope.myBatsman = response.data.register;
  });
});
