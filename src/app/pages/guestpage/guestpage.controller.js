(function(){
	'use strict';

	angular
		.module('meetme')
		.controller('GuestPageController', GuestPageController);

		function GuestPageController(){
			var vm = this;

			vm.title = "Time Options";
			vm.description = "Please add your busy time for this event";
			vm.titlee = "Time Slots";
			vm.descriptionn = "list of time choosen by you";
			vm.days = 2;
			vm.lefttitle = "Description";
			vm.leftdesc = "Your event information";
			vm.eventname = "Rapat internal";
			//vm.stat = "Urgent";
			vm.durato = "15:00";
			vm.durafrom = "14:00";
			vm.dateto = "24/04/2016";
			vm.datefrom = "27/04/2016";
			vm.gmt = "Indonesia (GMT + 7)";
			vm.eventdesc = "Rapat internal JTK, pembahasan mengenai sponsorship, publikasi dan acara. Diharapkan membawa atribut jahim dan syal. Tolong kepada setiap departemen diharapkan anggotanya dapat dipastikan mengikuti kegiatan ini.";
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

			vm.removeFromSelected = function(dt) {
				vm.selectedDates.splice(vm.selectedDates.indexOf(dt), 1);
			}

			vm.removeFromSelected2 = function(dt) {
				vm.selectedDates2.splice(vm.selectedDates2.indexOf(dt), 1);
			}

			vm.mytime = new Date();
			vm.mytime2 = new Date();

			vm.hstep = 1;
			vm.mstep = 1;

			vm.ismeridian = false;

			vm.myData = [
			{
			"Date": "-",
			"timeFrom": "-",
			"timeUntil": "-",
			"Duration": "-"
			}
		]



		}

})();
