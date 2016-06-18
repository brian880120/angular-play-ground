(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .controller('routerApp.playGround.TransclusionController', TransclusionController);

    function TransclusionController() {
        var vm = this;
        vm.message = "this is message";
    }
}());