angular.module('Ui.Cery', [])
    .directive('dynamicTable', function() {
        return {
            scope: {
                titles: '=',
                datas: '=',
                optionItems: '='
            },
            restrict: 'E',
            templateUrl: 'js/table.html',
            transclude: true,
            replace: true,
            link: function(scope, element, attr) {
                scope.titles = scope.titles || []; //设置默认初值
                scope.datas = scope.datas || []; //设置默认初值
                var listener = scope.$watch('datas', function() { //监听datas改变
                    scope.datas = scope.datas || [];
                    var choose_list_titles = scope.titles.filter(function(x) {
                        return x.type == 2
                    }).map(function(x) {
                        return {
                            choose_name: x.id, //选择项名称
                            choose_list_name: x.choose_list //选择列表名称
                        }
                    });
                    scope.datas.forEach(function(x) {
                        choose_list_titles.forEach(function(xx) {
                            x[xx.choose_list_name] = x[xx.choose_list_name] || [];
                            x[xx.choose_name] = x[xx.choose_list_name].find(function(xxx) {
                                return xxx[attr.findOption] == x[xx.choose_name][attr.findOption];
                            })
                        })
                    })
                })
            }
        }
    })