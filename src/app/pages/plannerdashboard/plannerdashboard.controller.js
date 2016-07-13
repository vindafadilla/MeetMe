(function(){
	'use strict';

	angular
		.module('meetme')
		.controller('plannerDashboardController',plannerDashboardController);

	function plannerDashboardController($log , $location, $routeParams, $route,events){

		var vm = this;
		
		vm.myData = {};
		vm.myData.columnDefs = [
			{name :'Date',type: 'date', cellFilter: 'date:\'MM/dd/yyyy\''},
			{name : 'title'},
			{ name : 'action',
					cellTemplate:'<a href="asup.html">View Details</a>'}		//menampilkan hanya satu kolom
		];	

		vm.myData.data = events.query();
		//	var finalJson = mergeJson({}, json0, json1);
      // instance objek
      vm.event = new events();

		vm.tambah_data = function(){
			events.save(vm.event, function(){
          	$route.reload();
        	});

		};

		




		vm.title = "You have login as Meeting Planner";
		vm.desc = "List of events that you created";

		vm.alerts = [
			{type:'warning',msg:'All Participants has confirmed '}
		];
		vm.closeAlert = function(index){
			vm.alerts.splice(index, 1);
		};

		vm.gridOptions = {};

		vm.gridOptions.columnDefs = [
			{name : 'title'}
		];

		vm.gridOptions.data = events.query();
		

		vm.eventSources;
    }


})()