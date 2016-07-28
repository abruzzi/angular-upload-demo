angular
    .module('app', ['angularFileUpload'])
    .controller('AppController', function($scope, FileUploader) {
    	$scope.result = '';
        $scope.uploader = new FileUploader({url: '/upload'});
 		$scope.uploader.onSuccessItem = function(fileItem, response, status, headers) {
            $scope.result=response;
        };
    });