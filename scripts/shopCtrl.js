angular.module('assessment').controller('shopCtrl',function($scope, shopService){
    shopService.getProducts().then(function(response){
        $scope.products = response.data
        console.log($scope.products)
    })
    $scope.visible = false;
});