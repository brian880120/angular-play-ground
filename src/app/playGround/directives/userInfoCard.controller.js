(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .controller('routerApp.playGround.UserInfoCardController', UserInfoCardController);

    UserInfoCardController.$inject = [
        '$scope'
    ];

    function UserInfoCardController($scope) {
        $scope.knightMe = knightMe;

        function knightMe() {
            $scope.user.rank = 'test';
        }
    }
}());