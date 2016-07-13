(function(){
	'use strict';

	angular
		.module('meetme')
		.controller('ProfileController', ProfileController);

		function ProfileController($http, $log , $location, $routeParams, $route){
			var vm = this;

			vm.title = "Profile"
			vm.desc = "fill this form";
			vm.userEmail = $routeParams.userEmail;

			$http.get("app/pages/profile/countrytimezone.json").then(function(response) {
				vm.country = response.data;
			});


		}

})()
