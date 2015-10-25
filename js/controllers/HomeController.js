app.controller('HomeController', ['$scope', 'hello', function ($scope, hello) {
    hello.success(function (data) {
        $scope.hello = data;
    });
}]);
