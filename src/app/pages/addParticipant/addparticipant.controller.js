(function(){
	'use strict';

	angular
		.module('meetme')
		.controller('addParticipantController',addParticipantController);

	function addParticipantController(){

		var vm = this;

		vm.title = "Add From Your Google Contact List";
		vm.title2 = "List Event's Participant";
		vm.desc = "List of participant you'll invited";

		vm.gridParticipant = {};

		vm.gridParticipant.columnDefs = [
			{field : 'Name'},
			{field : 'Email Address'},
			{field : 'Add', cellTemplate :'<input type="checkbox" value="{{ row.entity.Name }}">'},
			{field : 'Group', cellTemplate : '<select><option>MUST</option><option>Production Manager</option><option>Not Necessary</option>'}

		];

		vm.gridParticipant.data = [
			{
				'Name'	:"Hanif Ibrahim",
				'Email Address'	: 'hanifibram@gmail.com',
				'Add'	: '',
				'Group': ''

			},
			{
				'Name'	: "Bayu Arafli",
				'Email Address'	: 'bayuarafli@gmail.com',
				'Add'	: '',
				'Group': ''
			},
			{
				'Name'	: "Nurul Mardiyah",
				'Email Address'	: 'nurulmardiyah@gmail.com',
				'Add'	: '',
				'Group': ''
			},
			{
				'Name'	: "Vinda Fadilla",
				'Email Address'	: 'vinda@gmail.com',
				'Add'	: '',
				'Group': ''
			},
			{
				'Name'	: "Risa Aprillia",
				'Email Address'	: 'Risaaprillia@gmail.com',
				'Add'	: '',
				'Group': ''
			}
		];

		vm.listEventParticipant = {};

		vm.listEventParticipant.column = [
			{name : 'Name'},
			{name : 'Email'},
			{name : 'Group'}
		];

		vm.listEventParticipant.data = [
			{
				'Name' : "Hanif Ibrahim",
				'Email' : "hanifibram@gmail.com",
				'Group' : "Must"
			},

			{
				'Name' : "Bayu Arafli",
				'Email' : "bayuarafli@gmail.com",
				'Group' : "Must"
			},
			{
				'Name' : "Nurul Mardiyah",
				'Email' : "nurulmardiyah@gmail.com",
				'Group' : "Production Manager"
			},
			{
				'Name' : "Vinda Fadilla",
				'Email' : "vinda@gmail.com",
				'Group' : "Not Necessary"
			},
			{
				'Name' : "Risa Aprillia",
				'Email' : "Risaaprillia@gmail.com",
				'Group' : "Production Manager"
			}
		]

		// vm.desc1 = "From";
		// vm.desc2 = "To";

		vm.mytime = new Date();
		vm.mytime2 = new Date();

		vm.hstep = 1;
		vm.mstep = 1;

		vm.ismeridian = false;

		vm.changed = function () {

			/**
			* change
			* @type {String}
			*/

		};

		vm.myData = [
		{
		"Date": "-",
		"timeFrom": "-",
		"timeUntil": "-",
		"Duration": "-"
		}
		]

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

})();
