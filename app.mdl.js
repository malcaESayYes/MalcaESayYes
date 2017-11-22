(function () {
    'use strict';

    angular.module('pgApp.route', []);

    angular.module('pgApp.login', []);
    angular.module('pgApp.photo', []);
    angular.module('pgApp.services', []);

    angular.module('pgApp', [
        'ngRoute',

        'pgApp.route',
        'pgApp.services',

        'pgApp.login',
        'pgApp.photo'
    ])
    .run(function ($rootScope) {
        $rootScope.title = "Photo Gallery 33";
        $rootScope.datetime = new Date();
    });

})();