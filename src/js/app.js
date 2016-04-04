// sample angular code

var app = angular.module('allTheGreatTodos', []);

app.controller('todoController', ['$scope', function($scope) {
  $scope.greeting = "Hello World!";
}]);
