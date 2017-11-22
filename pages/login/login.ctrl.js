(function () {
    'use strict';

    angular.module('pgApp.login')
        .controller('LoginController', LoginController);

    function LoginController($scope, $http, $location, loginService) {
        $scope.login = function () {

            
            loginService
                .login($scope.user)
                .then(function success(response) {
                    $scope.user.isSuccess = response.data;
                    if ($scope.user.isSuccess) {
                        $scope.spSuccess = "משתמש נכנס בהצלחה";
                        $location.path('/photo');
                    }
                    else
                        $scope.spSuccess = "משתמש לא קיים";
                }, function error(error) {
                    console.log(error);
                });
        }
    }
})();