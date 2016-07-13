(function(){
	'use strict';

	angular
		.module('meetme')
		.controller('TimeOptionsController', TimeOptionsController);

		function TimeOptionsController( $log , $location, $routeParams, $route,timeoptions){
		var vm = this;

		vm.title = "Dates Propose";
		vm.description = "we can help you search for the suitable date and time to held this event based on informations below";

		vm.titlee = "Time Slots";
		vm.descriptionn = "list of time choosen by planner";
		// vm.desc1 = "From";
		// vm.desc2 = "To"; r$log , $location, $routeParams, $route,TimeOptionsController  ,

		vm.mytime = new Date();
		vm.mytime2 = new Date();

		vm.hstep = 1;
		vm.mstep = 1;

		vm.ismeridian = false;

		vm.changed = function () {

			$log.log('Time changed to:' + vm.mytime);
		};

		vm.myData = {};
		vm.myData.columnDefs = [
			{ name : 'DateFrom'},
			{ name : 'timeFrom'},
			{ name : 'timeUntil'}
		]
		vm.myData.data = timeoptions.query();

      	// instance objek
      	vm.timeoption = new timeoptions();

		vm.tambah_data = function(){
			timeoptions.save(vm.timeoption, function(){
				$route.reload();
			});
		};

		vm.today = function() {
			vm.timeoption.DateFrom = new Date();
			vm.timeoption.DateTo = new Date();
		};

		vm.today();

		vm.clear = function() {
			vm.timeoption.DateFrom = null;
			vm.timeoption.DateTo = null;
		};

		vm.dateOptionsFrom = {
			formatYear: 'yy',
			maxDate: new Date(2020, 5, 22),
			minDate: new Date(),
			startingDay: 1
		};

		vm.dateOptionsTo = {
			formatYear: 'yy',
			maxDate: new Date(2020, 5, 22),
			minDate: new Date(),
			startingDay: 1
		};

		vm.toggleMin = function() {
			vm.dateOptionsFrom.minDate = new Date;
			vm.dateOptionsTo.minDate = new Date;
		};

		vm.toggleMin();

		vm.open1 = function() {
			vm.popup1.opened = true;
		};

		vm.open2 = function() {
			vm.popup2.opened = true;
		};

		vm.popup1 = {
			opened: false
		};

		vm.popup2 = {
			opened: false
		};

	}

})()
