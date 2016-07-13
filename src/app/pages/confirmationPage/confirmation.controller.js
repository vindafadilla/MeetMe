(function(){
	'use strict';

	angular
		.module('meetme')
		.controller('confirmationPageController', confirmationPageController)
		.controller("ModalInstanceController", ModalInstanceController);

		function confirmationPageController($uibModal){
			var vm = this;

			vm.title2 ="Would you attend to this event?";
			vm.description2 = "1 list of participant";
			vm.title3 ="Your event date";
			vm.days = 2;
			vm.lefttitle1 = "Last Confirmation";
			vm.leftdesc1 = "Please confirmation before :";
			vm.lefttitle = "Description";
			vm.leftdesc = "Your event information";
			vm.eventname = "Rapat Internal";
			<!--vm.stat = "Urgent";-->
			vm.durato = "15:00";
			vm.durafrom = "14:00";
			vm.dateto = "24/04/2016";
			vm.datefrom = "27/04/2016";
			vm.gmt = "Indonesia (GMT + 7)";
			vm.eventdesc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

			// var map;
			// function initMap() {
			//   map = new google.maps.Map(document.getElementById('map'), {
			//     center: {lat: -34.397, lng: 150.644},
			//     zoom: 8
			//   });
			// }

			vm.activeDate = null;
			vm.selectedDates = [new Date().setHours(0, 0, 0, 0)];
			vm.type = 'individual';


			vm.removeFromSelected2 = function(dt) {
				vm.selectedDates2.splice(vm.selectedDates2.indexOf(dt), 1);
			}

			vm.mytime = new Date();
			vm.mytime2 = new Date();

			vm.hstep = 1;
			vm.mstep = 1;

			vm.ismeridian = false;
			vm.input ="input manual";
			vm.syncCalendar ="Choose The calendar *authorization* to sync your personal events are not going tobe shown in our system";
			vm.formdesc = "Rapat internal JTK, pembahasan mengenai sponsorship, publikasi dan acara. Diharapkan membawa atribut jahim dan syal.";

			vm.myData = [
			{
			"Date": "-",
			"timeFrom": "-",
			"timeUntil": "-",
			"Duration": "-"
			}
		];

		vm.opencancel = function(size){
			$uibModal.open({
				templateUrl: 'app/finalizeEvent/cancelEvent.html',
				size:size,
				controller: "ModalInstanceController",
				controllerAs: "modal"
			});

		}
		}

	function ModalInstanceController( $uibModalInstance ) {
      var vm = this;
      vm.nama = "test";

      vm.ok = function () {
        $uibModalInstance.close();
      };

      vm.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
    }


})();
