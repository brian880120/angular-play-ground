(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .directive('droidInfoCard', DroidInfoCardDirective);

    function DroidInfoCardDirective() {
        return {
            scope: {
                droid: '=',
                initialCollapsed: '@collapsed'
            },
            restrict: 'E',
            templateUrl: 'playGround/userInfoCard/directives/droid/templates/droidInfoCard.template.html',
            controller: 'routerApp.playGround.DroidInfoCardController'
        };
    }

}());