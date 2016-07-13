(function(){
	'use strict';

	angular
		.module('meetme')
		.controller('mainDashboardController',mainDashboardController);

		function mainDashboardController(){
			var vm = this;

			vm.title = "Welcome, Hani!";
			vm.desc = "Please choose who you want to login as";
			vm.plannerdesc = "Want to create an event? Login as Meeting Planner now";
			vm.participantdesc = "View details of the event that invite you";

		}


})();
