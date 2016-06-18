(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .directive('eventPause', EventPauseDirective);

    EventPauseDirective.$inject = [
        '$parse'
    ];

    function EventPauseDirective($parse) {
        return {
            restrict: 'A',
            link: link
        };

        function link(scope, elem, attrs) {
            var fn = $parse(attrs['eventPause']);
            elem.on('pause', function(event) {
                scope.$apply(function() {
                    fn(scope, {evt: event});
                })
            });
        }
    }

}());