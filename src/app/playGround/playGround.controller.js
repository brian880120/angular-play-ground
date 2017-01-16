(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .controller('routerApp.playGround.PlayGroundController', PlayGroundController);

    PlayGroundController.$inject = [
        'routerApp.core.states.StatesConstant'
    ];

    function PlayGroundController(StatesConstant) {
        var vm = this;

        vm.states = [
            {
                state: StatesConstant.PLAY_GROUND_USERCARD,
                text: 'User Info Card'
            },
            {
                state: StatesConstant.PLAY_GROUND_DECORATOR,
                text: 'Decorator'
            },
            {
                state: StatesConstant.PLAY_GROUND_TRANSCLUSION,
                text: 'Transclusion'
            }
        ];
    }

    function test() {
        console.log('test');

        console.log('test');
    }
}());
