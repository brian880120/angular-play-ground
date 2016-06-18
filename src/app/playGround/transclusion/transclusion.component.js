(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .component('transclusion', {
            templateUrl: 'playGround/transclusion/transclusion.template.html',
            controller: 'routerApp.playGround.TransclusionController as vm'
        });
}());