(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .directive('userAddress', UserAddressDirective);

    function UserAddressDirective() {
        return {
            scope: {
                user: '='
            },
            restrict: 'E',
            templateUrl: 'playGround/delayBind/directives/templates/userAddress.template.html',
            controller: 'routerApp.playGround.UserAddressController'
        };
    }

}());