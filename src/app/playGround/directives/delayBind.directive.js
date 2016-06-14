(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .directive('delayBind', DelayBindDirective);

    DelayBindDirective.$inject = [
        '$interpolate'
    ];
    function DelayBindDirective($interpolate) {
        return {
            restrict: 'A',
            compile: compile
        };
        function compile(tElem, tAttrs) {
            console.log('In compile');
            var interpolateFunc = $interpolate(tAttrs.delayBind);
            tAttrs.$set('delayBind', null); //Clear it out so no bindings occur

            return {
                pre: function(scope, elem, attrs) {
                    console.log('In delayBind pre' + elem[0].tagName); 
                },
                post: function(scope, elem, attrs) {
                    console.log('In delayBind post' + elem[0].tagName);
                    elem.on(attrs.trigger, function(event) {
                        var attr = attrs.attribute;
                        var val = interpolateFunc(scope);
                        if (attr && !elem.attr(attr)) {
                            elem.attr(attr, val);
                        }
                    });
                },
            };
        }
    }

}());