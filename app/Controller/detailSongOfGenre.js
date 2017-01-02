app.controller("detailSongOfGenreCtrl", function ($scope, $http, $routeParams, $cookies) {
    $http.get('http://localhost:3000/api/v1/song/'+ $routeParams.id)
        .then(function (response) {
            $scope.song = response.data;
        });

    if($cookies.get('byMusic') != null){
        $scope.list = $cookies.getObject('byMusic');
        $scope.cartCount1 = $scope.list.length;
    }else{
        $scope.cartCount1 = 0;
    }
});