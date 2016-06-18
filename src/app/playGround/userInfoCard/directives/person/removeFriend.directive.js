(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .directive('removeFriend', RemoveFriendDirective);

    function RemoveFriendDirective() {
        return {
            scope: {
                notifyParent: '&method'
            },
            restrict: 'E',
            templateUrl: 'playGround/userInfoCard/directives/person/templates/removeFriend.template.html',
            controller: 'routerApp.playGround.RemoveFriendController'
        };
    }

}());