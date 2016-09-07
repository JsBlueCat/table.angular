var MyApp = angular.module('DynamicTable', ['ui.cery','ui.bootstrap','ui.router']);

if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function(predicate) {
    if (this === null) {
      throw new TypeError('Array.prototype.findIndex called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return i;
      }
    }
    return -1;
  };
}

MyApp.controller('baseCtrl', ['$scope', '$http', function($scope, $http) {
    
    $scope.dataLength = 97;
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
        choose_name: "name", //对应列表内显示的项
        choose_list: "choose_list", //对应列表项
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
    $scope.NowPage =  1;
    $scope.MaxShowNum = 25;

    $scope.initialize = function() {
        $http.get('datas.json').then(function(res) {
            $scope.datas = res.data || [];
        })
    }
    $scope.ChangePageNum = function(CurrentPage,MaxShowNum){
        console.log(CurrentPage);
        console.log(MaxShowNum);
    }
}])
.controller('TabsCtrl',['$scope','$location','$rootScope',function($scope,$location,$rootScope){
    $scope.tabs = [
        {
            head:"tab1",
            title:"tab1",
            url:"component/tab1.html"
        },{
            head:"tab2",
            title:"tab2",
            url:"component/tab2.html"
        },{
            head:"tab3",
            title:"tab3",
            url:"component/tab3.html"
        }
    ];
    $scope.activeJustified = $scope.tabs.findIndex(function(x){
        return  $location.path().includes(x.head);
    })
    $scope.ChangePath  = function(path){
        console.log(1);
        if($location.path().includes(path)){

        }else{
            $rootScope.$state.go(path);
        }
    }
    $scope.Remove = function(e){
        console.log(e);
    }
}])
.controller('taboneCtrl',['$scope','$rootScope','$location',function($scope,$rootScope,$location){
    $scope.tabs = [
        {
            head:"tab11",
            title:"tab1.tab11",
            url:"component/tab11.html"
        },{
            head:"tab21",
            title:"tab1.tab21",
            url:"component/tab21.html"
        },{
            head:"tab31",
            title:"tab1.tab31",
            url:"component/tab31.html"
        }
    ];
    $rootScope.$state.go($scope.tabs[0].title);
    $location.path($scope.tabs[0].title);
    $scope.activeJustified = $scope.tabs.findIndex(function(x){
        return  $location.path().includes(x.head);
    })
}])

