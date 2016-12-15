app.controller("detailArtistCtrl", function ($scope, $http, $routeParams) {
    $http.get('http://localhost:3000/api/v1/artist/'+ $routeParams.id)
        .then(function (response) {
            $scope.artist = response.data;
        });
});