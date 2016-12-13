
var app = angular.module('MusicStore',[]);

    app.config(['$routeProvider',
    function($routeProvider){
        $routeProvider.
        when('/home',{
            templateUrl: './views/home/home.html'
        }).
        when('/album',{
            templateUrl: './views/album/album.html'
        }).
        otherwise({
            redirectTo: '/home'
        });
    }]);
