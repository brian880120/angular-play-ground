(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .directive('userInfoCard', UserInfoCardDirective);

    function UserInfoCardDirective() {
        return {
            scope: {
                user: '=',
            },
            link: link,
            restrict: 'E',
            templateUrl: 'playGround/directives/templates/userInfoCard.template.html',
            controller: 'routerApp.playGround.UserInfoCardController'
        };
        function link(scope, elem, attrs) {
            console.log(scope.user);
        }
    }

}());