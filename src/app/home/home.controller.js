(function() {
    'use strict';
    angular.module('routerApp.home')
        .controller('routerApp.home.HomeController', HomeController);

    HomeController.$inject = [
        '$scope',
        'Upload',
        '$timeout',
        'routerApp.core.CoreService',
        'routerApp.core.CoreFactory'
    ];

    function HomeController($scope, Upload, $timeout, CoreService, CoreFactory) {
        var vm = this
        vm.upload = upload;
        vm.dogs = [
            'Bernese',
            'Husky',
            'Goldendoole'
        ];

        function upload(files) {
            if (_.isEmpty(files)) {
                return;
            }
            _.forEach(files, function(file) {
                if (!file.$error) {
                    Upload.upload({
                        url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                        data: {
                            file: file
                        }
                    }).then(function(res) {
                        $timeout(function() {
                            console.log(res);
                        });
                    }, function(err) {
                        console.log(err);
                    }, function(evt) {
                        console.log(evt);
                    })
                }
            })
        }

        $scope.$watch('vm.files', function() {
            vm.upload(vm.files);
        })
    }
}());
