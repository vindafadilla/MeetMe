(function(){
	'use strict';

	angular
		.module('meetme')
		.controller('participantDashboardController',participantDashboardController);

	function participantDashboardController(){

		var vm = this;

		vm.title = "You have login as Participant";
		vm.desc = "List of events that you as Participant";

		vm.alerts = [
			{type:'warning',msg:'Tia invited you to Kumpul Panitia Porseni! '}
		];
		vm.closeAlert = function(index){
			vm.alerts.splice(index, 1);
		};

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
			textColor : 'white'
		};

		vm.calendarOptions = {
			calendar : {
				height : 301,
				editable : true,
				header : {
					left : 'title',
					center : '',
					right : 'prev,next basicWeek month agendaDay'
				}
			}
		}


		vm.gridOptions = {};

		vm.gridOptions.columnDefs = [
			{name : 'date'},
			{name : 'time'},
			{name : 'title'},
			{name : 'status'},
			{name: 'Menu',
             cellTemplate:'<a href="#/confirmation">Click Me</a>'}
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

		vm.alertType = "warning";
		vm.alertMsg = "Tia invited you to 'Kumpul Panitia Porseni' ";

		}


})();
