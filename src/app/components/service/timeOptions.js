(function() {
  'use strict';

  angular
    .module('meetme')
    .factory('timeoptions', timeoptions);

  function timeoptions($resource){
    return $resource("http://localhost:1515/timeoptions/:id");
  }

})();
