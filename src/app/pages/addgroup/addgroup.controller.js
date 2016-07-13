(function(){
	'use strict';

	angular
		.module('meetme')
		.controller('AddgroupController', AddgroupController);

		function AddgroupController($log){
			var vm = this;
			vm.title = "Add Group";
			vm.subtitle = "we can help you to custom minimum participant to attend this event, list of group is bellow";
			vm.grouptitle = "Participant Group";
			vm.subgrouptitle = "participant groups option for participant to choose";

			vm.gridOptions = {};

			vm.gridOptions.columnDefs = [
				{ name : 'groupName'},
				{ name : 'minimumParticipant'},
				{ name : 'action', displayName: 'Edit' ,cellTemplate: '<button id="editBtn" type="button" class="btn btn-small" ng-click="vm.edit(row.entity)" >Edit</button> ' }
			];

			vm.gridOptions.data = [
				{
					"idGroup" : 1,
					"groupName": "BEM",
					"minimumParticipant" : "10"
				},
				{
					"idGroup" : 2,
					"groupName": "HIMAS",
					"minimumParticipant" : "1"
				},
				{
					"idGroup" : 3,
					"groupName": "HIMARIS",
					"minimumParticipant" : "2"
				},
				{
					"idGroup" : 4,
					"groupName": "HMAN",
					"minimumParticipant" : "3"
				},
				{
					"idGroup" : 5,
					"groupName": "HIMAKOM",
					"minimumParticipant" : "3"
				}
			];

			vm.addNew = function()
			{
				vm.gridOptions.data.push( { groupName: 'Input your group name here', minimumParticipant: 'Input your minimum particpant name here', action: 'Delete' });
			};

			vm.removeGroup = function(){
				vm.Grid
			}

			vm.addNew2 = function() {
				vm.gridOptions.data.unshift({});
			};

		}

})()
