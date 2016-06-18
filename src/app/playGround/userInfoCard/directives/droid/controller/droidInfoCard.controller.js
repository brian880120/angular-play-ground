(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .controller('routerApp.playGround.DroidInfoCardController', DroidInfoCardController);

    DroidInfoCardController.$inject = [
        '$scope'
    ];

    function DroidInfoCardController($scope) {
        $scope.collapseState = ($scope.initialCollapsed === 'true');

        $scope.knightMe = knightMe;

        $scope.nextState = nextState;

        $scope.collapse = collapse;

        function knightMe() {
            $scope.droid.rank = 'test';
        }

        function nextState() {
            $scope.droid.level++;
            $scope.droid.level = $scope.droid.level % 4;
        }

        function collapse() {
            $scope.collapseState = !$scope.collapseState
        }
    }
}());