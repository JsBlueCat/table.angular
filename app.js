var MyApp = angular.module('DynamicTable', ['Ui.Cery']);

MyApp.controller('baseCtrl', ['$scope', function($scope) {
    /*
        Type 属性代表表格中的表现形式
        0 文字
        1 输入框
        2 选择框
     */
    /*
        Position 属性代表所处的位置
        0 靠左
        1 靠中
        2 靠右
     */
    $scope.tableTitles = [{
        name: '序号',
        type: 0,
        position: 0
    }, {
        name: '名称',
        type: 0,
        position: 1
    }, {
        name: '其他',
        type: 0,
        position: 2
    }, {
        name: '其他',
        type: 0,
        position: 2
    }, ]


}])