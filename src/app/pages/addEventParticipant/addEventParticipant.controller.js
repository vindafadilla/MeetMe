(function(){
	'use strict';

	angular
		.module('meetme')
		.controller('AddEventParticipantController',AddEventParticipant);

		function AddEventParticipant($http){
			var vm = this;

			vm.desc = "in this page you can set some configuration";

			vm.isCollapsed = true;

			vm.titlee = "Time Slots";
			vm.descriptionn = "list of time choosen by planner";

			vm.TableGoogleContact = {
				enableFiltering: true,
				showGridFooter : true,
				enableCellEditOnFocus: true,
				paginationPageSizes: [10, 20, 30],
				paginationPageSize: 10,
				columnDefs: [
					{ name: 'name', enableCellEdit : false },
					{ name: 'email', enableCellEdit : false },
					{
						name: 'group',
						displayName: 'Group',
						editableCellTemplate: 'ui-grid/dropdownEditor',
						width: '20%',
						editDropdownValueLabel: 'group',
						editDropdownOptionsArray:
						[
							{ id: 'Necessary', group: 'Necessary' },
							{ id: 'Not Necessary', group: 'Not Necessary'},
							{ id: '.:: Choose Group ::.', group: '.:: Choose Group ::.'},
							{ id: 'UML', group: 'UML'},
							{ id: 'Modelling', group: 'Modelling'},
							{ id: 'Mockup', group: 'Mockup'}
							]
						}
				]
			};

			vm.TableProspectiveParticipant = {
				enableFiltering: true,
				paginationPageSizes: [10, 20, 30],
				paginationPageSize: 10,
				columnDefs: [
					{ field: 'name' },
					{ field: 'email' },
					{ field: 'group' }
				]
			};

			$http.get("app/addEventParticipant/dataTable.json").then(function(response) {
				vm.TableGoogleContact.data = response.data;
				vm.TableProspectiveParticipant.data = response.data;
			});

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
				startingDay: 1
			};
			minDate: new Date(),

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

			vm.setDate = function(year, month, day) {
				vm.dt = new Date(year, month, day);
				vm.dt2 = new Date(year, month, day);
			};

			vm.format = 'dd MMMM yyyy';
			vm.altInputFormats = ['M!/d!/yyyy'];

			vm.popup1 = {
			opened: false
			};

			// function getDayClass(data) {
			// 	var date = data.date,
			// 	mode = data.mode;
			// 	if (mode === 'day') {
			// 		var dayToCheck = new Date(date).setHours(0,0,0,0);
			//
			// 		for (var i = 0; i < vm.events.length; i++) {
			// 			var currentDay = new Date(vm.events[i].date).setHours(0,0,0,0);
			//
			// 			if (dayToCheck === currentDay) {
			// 				return vm.events[i].status;
			// 			}
			// 		}
			// 	}
			// 	return '';
			// }

		}
})();
