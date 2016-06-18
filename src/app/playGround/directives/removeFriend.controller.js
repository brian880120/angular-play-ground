(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .controller('routerApp.playGround.RemoveFriendController', RemoveFriendController);

    RemoveFriendController.$inject = [
        '$scope'
    ];

    function RemoveFriendController($scope) {

        $scope.confirmRemove = confirmRemove;

        $scope.startRemove = startRemove;

        $scope.cancelRemove = cancelRemove;

        $scope.removing = false;

        function confirmRemove() {
            $scope.notifyParent();
        }

        function startRemove() {
            $scope.removing = true;
        }

        function cancelRemove() {
            $scope.removing = false;
        }
    }
}());