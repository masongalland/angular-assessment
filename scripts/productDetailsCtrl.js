angular.module('assessment').controller('productDetailsCtrl',function($scope, shopService, $stateParams){
    shopService.getProductById($stateParams.id).then(function(response){
        $scope.product = response.data;
    })
});