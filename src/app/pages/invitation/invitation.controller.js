(function(){
	'use strict';

	angular
		.module('meetme')
		.controller('InvitationController', InvitationController)
		.controller("ModalInstanceController", ModalInstanceController);

		function InvitationController( $uibModal ){
			var vm = this;
			vm.open = function (size) {
				$uibModal.open({
					templateUrl: 'app/invitation/popupcancel.html',
					size: size,
					controller: "ModalInstanceController",
					controllerAs: "modal"
				});
			}

			vm.lefttitle = "Description";
			vm.leftsubtitle = "your event information";
			vm.dayleft = "2 Day Left";

			vm.eventtitle = "Your event title";
			vm.eventdesc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem necessitatibus maiores reprehenderit laudantium ipsa aspernatur tempore, unde ipsum dolorum vitae, nostrum commodi quaerat in veniam delectus consectetur placeat maxime accusantium.";
			vm.from = "14:00";
			vm.to = "15:00";
			vm.location = "Indonesia (GMT+7)";
			vm.dataPlausibleTimes = [
				{
					"choose": " ",
					"date" : "11/03/2016",
					"time" : "12:00 - 13:00",
					"number" : "10"
				},
				{
					"choose": " ",
					"date" : "11/03/2016",
					"time" : "13:00 - 14:00",
					"number" : "12"
				}
			];
			vm.dataParticipants = [
				{
					"name": "Yudi Mufti Fathulah",
					"email" : "yudi@gmail.com",
					"group" : "Necessary"
				},
				{
					"name": "Hanna Hafifah",
					"email" : "hanna@gmail.com",
					"group" : "Necessary"
				},
				{
					"name": "Rony Natakusumah",
					"email" : "rony@gmail.com",
					"group" : "Necessary"
				}
			]
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
