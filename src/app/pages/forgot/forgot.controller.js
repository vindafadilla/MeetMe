(function() {
  'use strict';

  angular
    .module('meetme')
    .controller('ForgotController', ForgotController)
    .controller("ModalInstanceController", ModalInstanceController);

  /** @ngInject */
  function ForgotController( $uibModal ) {
    var vm = this;

      vm.open = function (size) {

        $uibModal.open({
            templateUrl: 'app/pages/forgot/forgot.html',
            size: size,
            controller: "ModalInstanceController",
            controllerAs: "modal"
        });
      }
      
      }

      function ModalInstanceController( $uibModalInstance ) {
      var vm = this;

      vm.ok = function () {
        $uibModalInstance.close();
      };

      vm.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
    }

    
})();
