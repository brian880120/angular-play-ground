(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .component('decorator', {
            templateUrl: 'playGround/decorator/decorator.template.html',
            controller: 'routerApp.playGround.DecoratorController as vm'
        });
}());