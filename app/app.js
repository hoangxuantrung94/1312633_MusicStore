
var app = angular.module('MusicStore', ["ngSanitize", "ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: './view/home/home.html',
            controller: 'homeCtr'
        })
        .when('/album', {
            templateUrl: '/view/album/album.html',
            controller: 'albumCtr'
        })
        .otherwies({
            redirectTo: '/'
        })
});
