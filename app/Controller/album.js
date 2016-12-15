app.controller("albumCtrl", function ($scope, $http) {
    $http.get('http://localhost:3000/api/v1/album')
        .then(function (response) {
            $scope.albums = response.data;
        });
});