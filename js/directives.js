angular.module('Ui.Cery', [])
.directive('dynamic-table',function(){
    return {
        restrict: 'E',
        template: '<span>Hi there</span>',
        replace: true
    }
})