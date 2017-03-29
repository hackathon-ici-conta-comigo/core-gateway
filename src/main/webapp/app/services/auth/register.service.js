(function () {
    'use strict';

    angular
        .module('coregatewayApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('oauth/api/register', {}, {});
    }
})();
