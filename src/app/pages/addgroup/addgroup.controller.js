(function(){
	'use strict';

	angular
		.module('meetme')
		.controller('AddgroupController', AddgroupController);

		function AddgroupController(){
			var vm = this;
			vm.gridOptions = {};
			vm.title = "Add Group";
			vm.subtitle = "we can help you to custom minimum participant to attend this event, list of group is bellow";
			vm.grouptitle = "Participant Group";
			vm.subgrouptitle = "participant groups option for participant to choose";

			vm.gridOptions.columnDefs = [
				{ name : 'groupName'},
				{ name : 'minimumParticipant'},
				{ name : 'action',
					cellTemplate:'<a href="asup.html">Delete</a>'}
			];
			vm.gridOptions.data = [
				{
					"groupName": "BEM",
					"minimumParticipant" : "10"
				},
				{
					"groupName": "HIMAS",
					"minimumParticipant" : "1"
				},
				{
					"groupName": "HIMARIS",
					"minimumParticipant" : "2"
				},
				{
					"groupName": "HMAN",
					"minimumParticipant" : "3"
				},
				{
					"groupName": "HIMAKOM",
					"minimumParticipant" : "3"
				}
			];

			vm.addNew=function()
		    {
		      vm.gridOptions.data.push( { groupName: 'klik 2 kali untuk edit', minimumParticipant: 'klik 2 kali untuk edit', action: 'Delete' });
		    };
		}

})()