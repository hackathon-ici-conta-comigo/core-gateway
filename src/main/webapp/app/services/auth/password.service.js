(function() {
    'use strict';

    angular
        .module('coregatewayApp')
        .factory('Password', Password);

    Password.$inject = ['$resource'];

    function Password($resource) {
        var service = $resource('oauth/api/account/change_password', {}, {});

        return service;
    }
})();
