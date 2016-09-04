var MyApp = angular.module('DynamicTable', ['Ui.Cery']);

MyApp.controller('baseCtrl', ['$scope', '$http', function($scope, $http) {
    /*
        Type 属性代表表格中的表现形式
        0 文字
        1 输入框
        2 选择框
        3 金额
     */
    /*
        Position 属性代表所处的位置
        0 靠左
        1 靠中
        2 靠右
     */
    /*
        id 属性为数据项的属性名称
        如 obj = {
            name:"Cery",
            age:21
        }
        id 为 name or age 
        obj[id] 可以取到相应数据
     */
    $scope.tableTitles = [{
        id: "index_num",
        name: "序号",
        type: 0,
        position: 0,
    }, {
        id: "name",
        name: "名称",
        type: 0,
        position: 1
    }, {
        id: "price",
        name: "可购金额",
        type: 3,
        position: 2
    }, {
        id: "other",
        name: "其他",
        type: 1,
        position: 2
    }, {
        id: "choose",
        name: "选择",
        choose_name: "name",
        type: 2,
        position: 2
    }, ];
    
    $scope.options = [{
        name: "修改",
        func: function(item) {
            console.log(item);
        }
    }, {
        name: "删除",
        func: function(item) {
            console.log(item);
        }
    }];


    $scope.initialize = function() {
        $http.get('datas.json').then(function(res) {
            $scope.datas = res.data || [];
        })
    }

}])