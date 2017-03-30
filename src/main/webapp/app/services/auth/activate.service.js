(function() {
    'use strict';

    angular
        .module('gatewayApp')
        .factory('Activate', Activate);

    Activate.$inject = ['$resource'];

    function Activate ($resource) {
        var service = $resource('oauth/api/activate', {}, {
            'get': { method: 'GET', params: {}, isArray: false}
        });

        return service;
    }
})();
