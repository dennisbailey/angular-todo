// sample angular code

var app = angular.module('allTheGreatTodos', []);

app.controller('todoController', ['$scope', function($scope) {
  
  $scope.addTodo = function (todo) {
    todo.done = false;
    $scope.list.push(todo);
    
    $scope.show = 'incomplete';
    $scope.todo = {};
  }
  
  $scope.list = [{ task: 'Get this app working', done: false}];
}]);
