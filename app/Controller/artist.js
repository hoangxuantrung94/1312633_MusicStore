app.controller("artistCtrl", function ($scope, $http) {
    $http.get('http://localhost:3000/api/v1/artist')
        .then(function (response) {
            $scope.artists = response.data;
        });
});