angular.module('assessment').directive('individualProduct',function(){
    return {
        restrict: 'EA',
        templateUrl: 'views/product-tmpl.html',
        link: function(scope, element, attributes){
            scope.toggle = function(){
                scope.visible = !scope.visible;
            }
        }
    }
});