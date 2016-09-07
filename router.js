MyApp.run(['$rootScope', '$state', '$stateParams',function ($rootScope,   $state,   $stateParams) {
    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}])
.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("tab1",{
          url:"/tab1",
          templateUrl:"component/tab1.html",
          controller:"taboneCtrl"
      })
      .state("tab1.tab11",{
          url:"/tab11",
          templateUrl:"component/tab11.html"
      })
      .state("tab1.tab21",{
          url:"/tab21",
          templateUrl:"component/tab21.html"
      })
      .state("tab1.tab31",{
          url:"/tab31",
          templateUrl:"component/tab31.html"
      })
      .state("tab2",{
          url:"/tab2",
          templateUrl:"component/tab2.html"
      })
      .state("tab3",{
          url:"/tab3",
          templateUrl:"component/tab3.html"
      })
}]);
