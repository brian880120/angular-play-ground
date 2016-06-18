(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .controller('routerApp.playGround.DecoratorController', DecoratorController);

    function DecoratorController() {
        var vm = this;

        vm.size = 150;

        vm.messages = [];

        vm.handlePause = handlePause;

        function handlePause(e) {
            console.log(e);
            vm.messages.push({
                text: 'paused!'
            });
            console.log('paused!');
        }
    }
}());