(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .directive('personInfoCard', PersonInfoCardDirective);

    function PersonInfoCardDirective() {
        return {
            scope: {
                person: '=',
                initialCollapsed: '@collapsed'
            },
            restrict: 'E',
            templateUrl: 'playGround/userInfoCard/directives/person/templates/personInfoCard.template.html',
            controller: 'routerApp.playGround.PersonInfoCardController'
        };
    }

}());