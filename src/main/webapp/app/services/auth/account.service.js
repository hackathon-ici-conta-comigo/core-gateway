(function() {
    'use strict';

    angular
        .module('gatewayApp')
        .factory('Account', Account);

    Account.$inject = ['$resource'];

    function Account ($resource) {
        var service = $resource('oauth/api/account', {}, {
            'get': { method: 'GET', params: {}, isArray: false,
                interceptor: {
                    response: function(response) {
                        // expose response
                        return response;
                    }
                }
            }
        });

        return service;
    }
})();
