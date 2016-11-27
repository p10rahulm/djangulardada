/**
 * Created by bhive on 28-11-2016.
 */
(function () {
    'use strict';

    angular
    .module('cmath', [
      'routes',
      'authentication'
    ]);

    angular
    .module('routes', ['ngRoute']);

    angular
    .module('config', []);


    angular
    .module('cmath')
    .run(run);

    run.$inject = ['$http'];

    /**
    * @name run
    * @desc Update xsrf $http headers to align with Django's defaults
    */
    function run($http) {
      $http.defaults.xsrfHeaderName = 'X-CSRFToken';
      $http.defaults.xsrfCookieName = 'csrftoken';
    }


})();

