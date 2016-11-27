/**
 * Created by bhive on 28-11-2016.
 */

/**
* NavbarController
* @namespace cmath.layout.controllers
*/
(function () {
  'use strict';

  angular
    .module('cmath.layout.controllers')
    .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$scope', 'Authentication'];

  /**
  * @namespace NavbarController
  */
  function NavbarController($scope, Authentication) {
    var vm = this;

    vm.logout = logout;

    /**
    * @name logout
    * @desc Log the user out
    * @memberOf cmath.layout.controllers.NavbarController
    */
    function logout() {
      Authentication.logout();
    }
  }
})();