angular.module('Ui.Cery', [])
    .directive('dynamicTable', function() {
        return {
            scope: {
                titles: '=',

            },
            restrict: 'E',
            templateUrl: 'js/table.html',
            transclude: true,
            replace: true,
            link: function(scope, element, attr) {

            }
        }
    })