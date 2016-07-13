(function(){
	'use strict';

	angular
		.module('meetme')
		.controller('RegisterController', RegisterController);

		function RegisterController( $http ){
			var vm = this;

			vm.title = "Register"
			vm.desc = "Please fill out this form with the original identity";

			$http.get("app/pages/register/country.json").then(function(response) {
				vm.country = response.data;
			});

			$http.get("app/pages/register/timezone.json").then(function(response) {
				vm.timezone = response.data;
			});
		}

})();
