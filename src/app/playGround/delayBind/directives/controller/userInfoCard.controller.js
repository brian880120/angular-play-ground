(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .controller('routerApp.playGround.UserInfoCardController', UserInfoCardController);

    UserInfoCardController.$inject = [
        '$scope'
    ];

    function UserInfoCardController($scope) {
        $scope.collapseState = ($scope.initialCollapsed === 'true');

        $scope.knightMe = knightMe;

        $scope.collapse = collapse;

        $scope.removeFriend = removeFriend;

        function knightMe() {
            $scope.user.rank = 'test';
        }

        function collapse() {
            $scope.collapseState = !$scope.collapseState
        }

        function removeFriend(friend) {
            _.remove($scope.user.friends, function(data) {
                return _.isEqual(friend, data);
            });
        }
    }
}());