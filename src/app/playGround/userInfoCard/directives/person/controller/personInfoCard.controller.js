(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .controller('routerApp.playGround.PersonInfoCardController', PersonInfoCardController);

    PersonInfoCardController.$inject = [
        '$scope'
    ];

    function PersonInfoCardController($scope) {
        $scope.collapseState = ($scope.initialCollapsed === 'true');

        $scope.knightMe = knightMe;

        $scope.nextState = nextState;

        $scope.collapse = collapse;

        $scope.removeFriend = removeFriend;

        function knightMe() {
            $scope.person.rank = 'test';
        }

        function nextState() {
            $scope.person.level++;
            $scope.person.level = $scope.person.level % 4;
        }

        function collapse() {
            $scope.collapseState = !$scope.collapseState
        }

        function removeFriend(friend) {
            _.remove($scope.person.friends, function(data) {
                return _.isEqual(friend, data);
            });
        }
    }
}());