(function(){
	'use strict';

	angular
		.module('meetme')
		.controller('SettingsController', SettingsController);

		function SettingsController($location, $route , posts, userNew){
			var vm = this;

			// get one id
			// vm.single_post = userNew.get({'name': 'hanif'});

			// get all data
			vm.users = userNew.query();

			// instance objek
			vm.event = new userNew();

			vm.addData = function(){
				userNew.save( vm.event, function(){
					$route.reload();
				});
			};



		}

})();
