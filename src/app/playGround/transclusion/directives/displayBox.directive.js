(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .directive('displayBox', DisplayBoxDirective);

    function DisplayBoxDirective() {
        return {
            restrict: 'E',
            templateUrl: 'playGround/transclusion/directives/templates/displayBox.template.html',
            controller: 'routerApp.playGround.DisplayBoxController',
            transclude: true
        };
    }

}());