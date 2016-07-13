(function() {
  'use strict';

  angular
    .module('meetme')
    .controller('DashboardController', DashboardController);

	function DashboardController(){
		var vm = this;

		vm.title = "Dashboard";
		vm.descriptionPage = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quaerat numquam rerum molestias nulla. Odit deserunt, assumenda laborum nisi, cum iusto repellat ipsum ea eos, consectetur, similique id. Veritatis, quos.";

	}

})();