(function() {
  'use strict';

  angular
    .module('meetme')
    .factory('userNew', userNew);

  function userNew($resource){
    return $resource("http://localhost:2020/user/");
  }

})();
