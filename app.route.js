(function () {
    'use strict';

    angular
        .module('pgApp.route')
        .config(function ($routeProvider) {
            $routeProvider
                .when('/login', {
                    controller: 'LoginController',
                    templateUrl: 'pages/login/login.tmpl.html'
                })
            .when('/photo', {
                controller: 'PhotoController',
                templateUrl: 'pages/photo/photo.tmpl.html'
            })
            .otherwise({
                redirectTo: '/login'
            });

        });
       

})();