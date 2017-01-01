app.controller("detailSongOfGenreCtrl", function ($scope, $http, $routeParams) {
    $http.get('http://localhost:3000/api/v1/song/'+ $routeParams.id)
        .then(function (response) {
            $scope.song = response.data;
        });
});