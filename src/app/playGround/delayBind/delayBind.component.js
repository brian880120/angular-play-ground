(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .component('delayBind', {
            templateUrl: 'playGround/delayBind/delayBind.template.html',
            controller: 'routerApp.playGround.DelayBindController as vm'
        });
}());