(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .directive('spacebarSupport', SpacebarSupportDirective);

    function SpacebarSupportDirective() {
        return {
            restrict: 'A',
            link: link
        };

        function link(scope, elem, attrs) {
            $('body').on('keypress', function(event) {
                var vidElem = elem[0];
                if (event.keyCode === 32) {
                    if (vidElem.paused) {
                        vidElem.play();
                    } else {
                        vidElem.pause();
                    }
                }
            });
        }
    }

}());