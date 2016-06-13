(function() {
    'use strict';
    angular.module('routerApp.tableHelper')
        .directive('routerApp.tableHelper.TableHelperDirective', TableHelperDirective);

    function TableHelperDirective() {
        return {
            restrict: 'E',
            require: 'ngModel',
            templateUrl: 'tableHelper/directives/tableHelper.directive.template.html',
            scope: {
                columnmap: '=',
                datasource: '='
            },
            link: link
        };
    }

    function link(scope, element, attrs, ngModel) {
        var headerCols = [];
        var tableStart = '<table>';
        var tableEnd = '</table>';
        var table = '';
        var visibleProps = [];
        var sortCol = null;
        var sortDir = 1;

        attrs.$observe('ngModel', function(value) {
            scope.$watch(value, function(newValue) {
                render();
            })
        });

        scope.$watch(attrs.ngModel, render);

        scope.$watch(function() {
            return ngModel.$modelValue;
        }, function(newValue) {
            render();
        });

        ngModel.$render = function() {
            render(); 
        };

        scope.$watchCollection('datasource', render);

    }
}());