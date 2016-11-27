(function () {
  'use strict';

  angular
    .module('cmath.authentication', [
      'cmath.authentication.controllers',
      'cmath.authentication.services'
    ]);

  angular
    .module('cmath.authentication.controllers', []);

  angular
    .module('cmath.authentication.services', ['ngCookies']);
})();