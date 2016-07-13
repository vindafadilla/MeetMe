(function() {
  'use strict';

  angular
    .module('meetme')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
