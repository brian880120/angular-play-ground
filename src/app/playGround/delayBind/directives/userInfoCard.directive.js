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
            link: link,
            restrict: 'E',
            templateUrl: 'playGround/delayBind/directives/templates/userInfoCard.template.html',
            controller: 'routerApp.playGround.UserInfoCardController'
        };

        function link(scope, elem, attrs) {
            scope.nextState = nextState;

            function nextState() {
                scope.user.level++;
                scope.user.level = scope.user.level % 3;
                switch(scope.user.level) {
                    case 0:
                        elem.find('.panel-body').css('background-color', 'blue');
                        break;
                    case 1:
                        elem.find('.panel-body').css('background-color', 'yellow');
                        break;
                    case 2:
                        elem.find('.panel-body').css('background-color', 'red');
                        break;
                }
            }
        }
    }

}());