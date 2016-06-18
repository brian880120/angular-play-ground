(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .directive('fontScale', FontScaleDirective);

    function FontScaleDirective() {
        return {
            link: link
        };

        function link(scope, elem, attrs) {
            scope.$watch(attrs['fontScale'], function(newVal) {
                elem.css('font-size', newVal + '%');
            });
        }
    }

}());