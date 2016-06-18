(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .directive('stateDisplay', StateDisplayDirective);

    function StateDisplayDirective() {
        return {
            link: link
        };

        function link(scope, elem, attrs) {
            var params = attrs['stateDisplay'].split(' ');
            var linkVar = params[0];
            scope.$watch(linkVar, function(newVal) {
                elem.css('background-color', params[newVal + 1]);
            })
        }
    }

}());