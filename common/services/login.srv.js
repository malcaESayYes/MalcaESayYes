
(function () {
	'use strict';

	angular
      .module('pgApp.services')
      .factory('loginService', loginService);

	function loginService($http) {
		return {
			login: function (user) {
				return $http.post("/api/login", user);
		           
			}
		}
	}
})();
