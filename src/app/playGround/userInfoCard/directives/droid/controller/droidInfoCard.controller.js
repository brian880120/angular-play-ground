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

        $scope.collapse = collapse;

        function knightMe() {
            $scope.droid.rank = 'test';
        }

        function collapse() {
            $scope.collapseState = !$scope.collapseState
        }
    }
}());