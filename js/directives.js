angular.module('Ui.Cery', [])
    .directive('dynamicTable', function() {
        return {
            scope: {
                titles: '=',
                datas: '='
            },
            restrict: 'E',
            templateUrl: 'js/table.html',
            transclude: true,
            replace: true,
            link: function(scope, element, attr) {
                scope.titles = scope.titles || []; //设置默认初值
                scope.datas = scope.datas || []; //设置默认初值
            }
        }
    })