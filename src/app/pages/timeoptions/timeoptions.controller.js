(function(){
	'use strict';

	angular
		.module('meetme')
		.controller('TimeOptionsController', TimeOptionsController);

		function TimeOptionsController( $log , $location, $routeParams, $route,events,$cookies){
		var vm = this;

		vm.title = "Dates Propose";
		vm.description = "we can help you search for the suitable date and time to held this event based on informations below";

		vm.titlee = "Time Slots";
		vm.descriptionn = "list of time choosen by planner";
		// vm.desc1 = "From";
		// vm.desc2 = "To";

		vm.mytime = new Date('15-07-1996	');
		vm.mytime2 = new Date();

		vm.hstep = 1;
		vm.mstep = 1;

		vm.ismeridian = false;

		vm.title2 = "Input Duration"
		vm.description2 = "(How long the meeting will be held)"
		vm.changed = function () {

			/**
			* change 
			* @type {String}
			*/

			$log.log('Time changed to:' + vm.mytime);
		};

		vm.myData={};
		vm.myData.columnDefs=
		[
		{name :'Date',type: 'date', cellFilter: 'date:\'MM/dd/yyyy\''},
		{name :'timeFrom',type: 'date', cellFilter: 'date:\'hh:mm a\''},
		{name :'timeUntil',type: 'date', cellFilter: 'date:\'hh:mm a\''},
		{name :'Duration'}
		];
		vm.myData.data = events.query();

      // instance objek
      vm.event = new events();

		vm.tambah_data = function(){
			events.save(vm.event, function(){
				events.save($cookies.getObject("events"))
          	$route.reload();
        	});

		};

		vm.today = function() {
		vm.dt = new Date();
		vm.dt2 = new Date();
		};
		vm.today();

		vm.clear = function() {
		vm.dt = null;
		vm.dt2 = null;
		};

		vm.dateOptions = {
		formatYear: 'yy',
		maxDate: new Date(2020, 5, 22),
		minDate: new Date(),
		startingDay: 1
		};

		vm.dateOptions2 = {
		formatYear: 'yy',
		maxDate: new Date(2020, 5, 22),
		minDate: new Date(),
		startingDay: 1
		};

		vm.toggleMin = function() {
		vm.dateOptions.minDate = new Date;
		vm.dateOptions2.minDate = new Date;
		};

		vm.toggleMin();

		vm.open1 = function() {
		vm.popup1.opened = true;
		};

		vm.open2 = function() {
		vm.popup2.opened = true;
		};		

		vm.setDate = function(year, month, day) {
		vm.dt = new Date(year, month, day);
		vm.dt2 = new Date(year, month, day);
		};

		vm.format = 'yyyy/MM/dd';
		vm.altInputFormats = ['M!/d!/yyyy'];

		vm.popup1 = {
		opened: false
		};

		vm.popup2 = {
		opened: false
		};		

	}

})()
