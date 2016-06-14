(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .directive('bnDigest', BNDigestDirective);

    function BNDigestDirective() {
        return {
            restrict: 'A',
            link: link,
            scope: true
        };
        function link($scope, element, attributes) {
            $scope.localIsHot = false;
            element.mouseenter(function() {
                $scope.localIsHot = true;
                $scope.$digest();
            });
            element.mouseleave(function() {
                $scope.localIsHot = false;
                $scope.$digest();
            });
        }
    }

}());