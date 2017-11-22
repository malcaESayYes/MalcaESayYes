(function () {
    'use strict';

    angular.module('pgApp.photo')
        .controller('PhotoController', PhotoController);

    function PhotoController($scope, $http) {
        $scope.message = "I am PhotoController";
    }
})();