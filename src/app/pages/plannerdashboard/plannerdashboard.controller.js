(function(){
	'use strict';

	angular
		.module('meetme')
		.controller('plannerDashboardController',plannerDashboardController);

	function plannerDashboardController($log , $location, $routeParams, $route,timeoptions){

		var vm = this;

		vm.myData = timeoptions.query();
		//vm.myData = {};

		//vm.myData.columnDefs = [
		//	{name : 'date'}];

     	// instance objek
    	vm.timeoption = new timeoptions();

		vm.tambah_data = function(){
			timeoptions.save(vm.timeoption, function(){
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
			{name : 'date'},
			{name : 'time'},
			{name : 'title'},
			{name : 'status'},
			{name: 'Menu',
             cellTemplate:'<a href="#">View Details</a>'}
		];

		vm.gridOptions.data = [
			{
				'date'	: "13/03/2016",
				'time'	: '07:00',
				'title'	: 'Kumpul Proyek',
				'status': 'Urgent'
			},
			{
				'date'	: "17/03/2016",
				'time'	: '15:30',
				'title'	: 'Kumpul Himpunan',
				'status': 'Medium'
			},
			{
				'date'	: "21/03/2016",
				'time'	: '18:00',
				'title'	: 'Rapat Koordinasi KEMA',
				'status': 'Low'
			}
		];


		vm.eventSources = {
			events : [
				{
					title : 'Event 1',
					start : '2016-03-18'
				},
				{
					title : 'Event 2',
					start : '2016-03-20'
				},
				{
					title : 'Event 3',
					start : '2016-03-28'
				}
			],
			color : 'red',
			textColor : 'black'
		};
    }


})()
