angular.module('assessment').service('shopService',function($http){
    this.getProducts = function(){
        return $http.get('http://practiceapi.devmounta.in/products')
    }

    this.getProductById = function(id){
       return $http.get('http://practiceapi.devmounta.in/products/' + id)
    }

})