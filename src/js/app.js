// sample angular code

var app = angular.module('allTheGreatTodos', []);

app.controller('todoController', ['$scope', function($scope) {
  $scope.list = [{ task: 'Get this app working', done: false}];
}]);
