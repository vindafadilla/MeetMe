(function() {
  'use strict';

  angular
    .module('meetme')
    .directive('acmeNavbarAdmin', acmeNavbarAdmin)
    .controller("logoutModalInstanceController", logoutModalInstanceController);

  /** @ngInject */
  function acmeNavbarAdmin() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbarAdmin/navbarAdmin.html',
      controller: navbarAdminController,
      controllerAs: 'navbarAdmin',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function navbarAdminController($uibModal, $cookies){
      var vm = this;

      vm.userLogin = $cookies.get("userEmailLogin");

      vm.openlogout = function(size) {

        $uibModal.open({
          templateUrl: 'app/components/navbarAdmin/logoutForm.html',
          size:size,
          controller: "logoutModalInstanceController",
          controllerAs: "logoutModal"
        });

    };

      vm.opennotif = function (size) {

        $uibModal.open({
            templateUrl: 'app/components/navbarAdmin/notifications.html',
            size: size,
            controller: "ModalInstanceController",
          controllerAs: "modal"
        });
    };

    }
  }

   function logoutModalInstanceController( $uibModalInstance, $cookies) {
      var vm = this;

      vm.ok = function () {
          
        $cookies.remove('userEmailLogin');
        $uibModalInstance.close();
      };

      vm.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
  }

})();
