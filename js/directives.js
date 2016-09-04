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
                scope.$watch('datas', function() {
                    scope.datas = scope.datas || [];
                    scope.datas.forEach(function(x) {
                        x.choose_list = x.choose_list || [];
                        x.choose = x.choose_list.find(function(xx) {
                            console.log(xx);
                            return xx.id == x.choose.id;
                        })
                    })
                })
            }
        }
    })