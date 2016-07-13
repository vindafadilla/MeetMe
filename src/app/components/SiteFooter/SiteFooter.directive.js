(function() {
  'use strict';

  angular
    .module('meetme')
    .directive('acmeSiteFooter', acmeSiteFooter);

  /** @ngInject */
  function acmeSiteFooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/SiteFooter/SiteFooter.html',
      scope: {
          creationDate: '='
      },
      controller: SiteFooterController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SiteFooterController() {
      var vm = this;

      vm.test = "test";
      
    }
  }

})();
