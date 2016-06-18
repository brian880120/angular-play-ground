(function() {
    'use strict';
    angular.module('routerApp.playGround')
        .component('userInfoCard', {
            templateUrl: 'playGround/userInfoCard/userInfoCard.template.html',
            controller: 'routerApp.playGround.UserInfoCardController as vm'
        });
}());