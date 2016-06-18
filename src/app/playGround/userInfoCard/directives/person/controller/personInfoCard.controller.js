(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .controller('routerApp.playGround.PersonInfoCardController', PersonInfoCardController);

    PersonInfoCardController.$inject = [
        '$scope'
    ];

    function PersonInfoCardController($scope) {

        $scope.knightMe = knightMe;

        $scope.removeFriend = removeFriend;

        function knightMe() {
            $scope.person.rank = 'test';
        }

        function removeFriend(friend) {
            _.remove($scope.person.friends, function(data) {
                return _.isEqual(friend, data);
            });
        }
    }
}());