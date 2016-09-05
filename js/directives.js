if (!Array.prototype.find) {//模拟es6 find
  Object.defineProperty(Array.prototype, 'find', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function(predicate) {
      if (this == null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
      }
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }
      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      var value;

      for (var i = 0; i < length; i++) {
        if (i in list) {
          value = list[i];
          if (predicate.call(thisArg, value, i, list)) {
            return value;
          }
        }
      }
      return undefined;
    }
  });
}
angular.module('Ui.Cery', [])
    .directive('dynamicTable', function() {
        return {
            scope: {
                titles: '=',
                datas: '=',
                optionItems: '=',
                currentPage:'=',
                maxDataLength:'=',
                maxShowNum:'='
            },
            restrict: 'E',
            templateUrl: 'js/table.html',
            transclude: true,
            replace: true,
            link: function(scope, element, attr) {
                scope.titles = scope.titles || []; //设置默认初值
                scope.datas = scope.datas || []; //设置默认初值
                var Datalistener = scope.$watch('datas', function() { //监听datas改变
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
                var PageDatasListener = scope.$watch('maxDataLength',function(newValue,oldValue){
                    scope.maxPageNum = Math.ceil(scope.maxDataLength * 1.0 / scope.maxShowNum);//有多少页
                    scope.pageLists  = [];
                    for(var i =1 ;i<=scope.maxPageNum;i++){
                        scope.pageLists.push(i);
                    }
                })
                var PageShowListener = scope.$watch('maxShowNum',function(newValue,oldValue){
                    scope.maxPageNum = Math.ceil(scope.maxDataLength * 1.0 / scope.maxShowNum);//有多少页
                    scope.pageLists  = [];
                    for(var i =1 ;i<=scope.maxPageNum;i++){
                        scope.pageLists.push(i);
                    }
                    var CurrentPage_Max_Num = oldValue * scope.currentPage;
                    scope.currentPage =  Math.ceil(CurrentPage_Max_Num * 1.0/newValue);
                })
                scope.ChangePage = function(pageNum){//切换页面
                    scope.currentPage = pageNum;
                }
                scope.PrePage =  function(){
                    if(scope.currentPage<=1){return;}
                    scope.currentPage--;
                }
                scope.NextPage =  function(){
                    if(scope.currentPage>= Math.ceil(scope.maxDataLength * 1.0 / scope.maxShowNum)){return;}
                    scope.currentPage++;
                }
            }
        }
    })