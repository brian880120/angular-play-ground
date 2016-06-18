(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .controller('routerApp.playGround.UserPanelController', UserPanelController);

    UserPanelController.$inject = [
        '$scope'
    ];

    function UserPanelController($scope) {
        $scope.collapseState = ($scope.initialCollapsed === 'true');

        $scope.nextState = nextState;

        $scope.collapse = collapse;

        function nextState(evt) {
            evt.stopPropagation();
            evt.preventDefault();
            $scope.level++;
            $scope.level = $scope.level % 4;
        }

        function collapse() {
            $scope.collapseState = !$scope.collapseState
        }
    }
}());