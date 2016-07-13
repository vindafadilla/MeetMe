(function() {
  'use strict';

  angular
    .module('meetme')
    .factory('posts', posts);

  function posts($resource){
    return $resource("http://localhost:1515/posts/:id");
  }

})();
