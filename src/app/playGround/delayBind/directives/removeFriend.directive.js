(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .directive('removeFriend', RemoveFriendDirective);

    function RemoveFriendDirective() {
        return {
            scope: {
                user: '=',
                friend: '@',
                notifyParent: '&method'
            },
            restrict: 'E',
            templateUrl: 'playGround/delayBind/directives/templates/removeFriend.template.html',
            controller: 'routerApp.playGround.RemoveFriendController'
        };
    }

}());