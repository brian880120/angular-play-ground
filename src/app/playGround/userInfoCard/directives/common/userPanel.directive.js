(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .directive('userPanel', UserPanelDirective);

    function UserPanelDirective() {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'playGround/userInfoCard/directives/common/templates/userPanel.template.html',
            controller: 'routerApp.playGround.UserPanelController',
            scope: {
                name: '@',
                level: '=',
                initialCollapsed: '@collapsed'
            }
        };
    }

}());