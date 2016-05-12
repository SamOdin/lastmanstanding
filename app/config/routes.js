(function () {
    
    angular
        .module('main')
        .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main-catalog', {
                url: "/",
                templateUrl: "/app/config/views/main-catalog.html"
            })

            .state('section-catalog', {
                url: "/section-catalog",
                templateUrl: "/app/config/views/section-catalog.html"
            })

            .state('article-catalog', {
                url: "/article-catalog",
                templateUrl: "/app/config/views/article-catalog.html"
            })
            
    })

})();