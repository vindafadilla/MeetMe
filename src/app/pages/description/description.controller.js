(function(){
	'use strict';

	angular
		.module('meetme')
		.controller('DescriptionController', DescriptionController);

		function DescriptionController($log , $location, $routeParams, $route,events,$cookies){
		var vm = this;

		vm.myData = events.query();

		vm.single_post = events.get({"id": 1});   //mengambil satu object

      // instance objek
      vm.event = new events();

		vm.tambah_data = function(){
			$cookies.putObject("events", vm.event);
		};

		vm.open1 = function() {
		vm.popup1.opened = true;
		};

		vm.open2 = function() {
		vm.popup2.opened = true;
		};
		vm.open3 = function() {
		vm.popup3.opened = true;
		};		


		vm.title = "Event General Description";
		vm.desc = "Add description for your event"; 
		vm.tinymceOptions = {
			inline : false,
			plugins : 'image',
			skin : 'lightgray',
			theme : 'modern'
		};
		vm.eventstatus = [
			{"status" : "Urgent","statusId" : 0},
			{"status" : "High","statusId" : 1},
			{"status" : "Medium","statusId" : 2},
			{"status" : "Low","statusId" : 3}
		]
	}

})()