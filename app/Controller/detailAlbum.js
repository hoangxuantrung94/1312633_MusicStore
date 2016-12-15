app.controller("detailAlbumCtrl", function ($scope, $http, $routeParams) {
    $http.get('http://localhost:3000/api/v1/album/'+ $routeParams.id)
        .then(function (response) {
            $scope.album = response.data;
        });

    $http.get('http://localhost:3000/api/v1/song/album/'+ $routeParams.id)
        .then(function (response) {
            $scope.songAlbum = response.data;
        });
});