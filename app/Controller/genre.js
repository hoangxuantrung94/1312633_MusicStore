app.controller("genreCtrl", function ($scope, $http) {

    $scope.fn_load = function (value) {
        //console.log(value);
        return $scope.songsGenre = $http.get('http://localhost:3000/api/v1/song/genre/' + value)
            .then(function (response) {
                $scope.songsGenre = response.data;
                console.log($scope.songsGenre);
            });
        return $scope.songsGenre;
    };

    $scope.getSongGenre = function (value) {
        //console.log(value);
        return $scope.songsGenres = $http.get('http://localhost:3000/api/v1/song/genre/' + value)
            .then(function (response) {
                $scope.songsGenres = response.data;
                console.log($scope.songsGenres);
            });
        return $scope.songsGenres;
    };

    $http.get('http://localhost:3000/api/v1/genre')
        .then(function (response) {
            $scope.genres = response.data;
        });

    $http.get('http://localhost:3000/api/v1/song')
        .then(function (response) {
            $scope.songs = response.data;
        });


});