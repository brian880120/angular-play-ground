(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .directive('userInfoCard', UserInfoCardDirective);

    function UserInfoCardDirective() {
        return {
            scope: {
                user: '=',
                initialCollapsed: '@collapsed'
            },
            restrict: 'E',
            templateUrl: 'playGround/directives/templates/userInfoCard.template.html',
            controller: 'routerApp.playGround.UserInfoCardController'
        };
    }

}());