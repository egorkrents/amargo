app.factory('hello', ['$http', function ($http) {
    return $http.jsonp('http://www.mocky.io/v2/562d20120f0000a22b05837b?callback=JSON_CALLBACK')
        .success(function (data) {
            return data;
        })
        .error(function (data) {
            return data;
        });
}]);