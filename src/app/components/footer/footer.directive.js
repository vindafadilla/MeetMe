(function() {
  'use strict';

  angular
    .module('meetme')
    .directive('acmeFooter', acmefooter);

  /** @ngInject */
  function acmefooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      controller: footerController,
      controllerAs: 'vm'
    };

    return directive;

    /** @ngInject */
    function footerController() {
      var vm = this;

      vm.test = "test";
      
    }
  }

})();
