
var app = angular.module('MusicStore',[]);

    app.config(['$routeProvider',
    function($routeProvider){
        $routeProvider.
        when('/home',{
            templateUrl: './views/home/home.html',
            controller: 'homeCtrl'
        }).
        when('/album',{
            templateUrl: './views/album/album.html',
            controller: 'albumCtrl'
        }).
        when('/album/:id',{
            templateUrl: './views/detailAlbum/detailAlbum.html',
            controller: 'detailAlbumCtrl'
        }).
        when('/artist',{
            templateUrl: './views/artist/artist.html',
            controller: 'artistCtrl'
        }).
        when('/artist/:id',{
            templateUrl: './views/detailArtist/detailArtist.html',
            controller: 'detailArtistCtrl'
        }).
        otherwise({
            redirectTo: '/home'
        });
    }]);
