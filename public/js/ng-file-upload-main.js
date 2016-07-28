//inject angular file upload directives and services.
var app = angular.module('fileUpload', ['ngFileUpload']);

app.controller('MyCtrl', ['$scope', 'Upload', '$timeout', function ($scope, Upload, $timeout) {
    $scope.result = '';

    $scope.uploadPic = function(file) {
      file.upload = Upload.upload({
        url: '/upload',
        data: {username: $scope.username, file: file},
      });

      file.upload.then(function (response) {
        $scope.result = response.data;
      });
    }
}]);