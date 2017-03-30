(function () {
    'use strict';

    angular
        .module('gatewayApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('oauth/api/register', {}, {});
    }
})();
