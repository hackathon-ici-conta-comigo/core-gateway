(function() {
    'use strict';

    angular
        .module('coregatewayApp')
        .factory('PasswordResetInit', PasswordResetInit);

    PasswordResetInit.$inject = ['$resource'];

    function PasswordResetInit($resource) {
        var service = $resource('oauth/api/account/reset_password/init', {}, {});

        return service;
    }
})();
