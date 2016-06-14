(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .component('delayBind', {
            templateUrl: 'playGround/templates/delayBind.template.html',
            controller: 'routerApp.playGround.PlayGroundController as vm'
        });
}());