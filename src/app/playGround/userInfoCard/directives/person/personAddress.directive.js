(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .directive('personAddress', PersonAddressDirective);

    function PersonAddressDirective() {
        return {
            scope: {
                person: '='
            },
            restrict: 'E',
            templateUrl: 'playGround/userInfoCard/directives/person/templates/personAddress.template.html',
            controller: 'routerApp.playGround.PersonAddressController'
        };
    }

}());