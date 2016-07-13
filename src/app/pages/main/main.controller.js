(function() {
  'use strict';

  angular
    .module('meetme')
    .controller('MainController', MainController)
    .controller('ModalMainInstanceController', ModalMainInstanceController);

  /** @ngInject */
    function MainController( $uibModal ) {
        var vm = this;

        vm.open = function (size) {
            $uibModal.open({
                templateUrl: 'app/pages/main/loginForm.html',
                size: size,
                controller: 'ModalMainInstanceController',
                controllerAs: 'mainModal'
            });
        }

    }

    function ModalMainInstanceController( $uibModalInstance, $log, $cookies, $location) {
          var vm = this;

          vm.login = function(){
            $log.log("user login :" + vm.loginEmail + "pass" + vm.loginPassword);
            $cookies.put( "userEmailLogin", vm.loginEmail );
            $uibModalInstance.close();
            $location.path("/maindashboard");
          }

          vm.ok = function () {
            $uibModalInstance.close();
          };

          vm.cancel = function () {
            $uibModalInstance.dismiss('cancel');
          };
    }


})();
