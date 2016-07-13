(function() {
  'use strict';

  angular
    .module('meetme')
    .factory('events', events);

  function events($resource) {
    return $resource("http://localhost:1515/events/:id");
  }

})();
