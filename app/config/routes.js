(function () {
    
    angular
        .module('main')
        .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

            /*.state('index', {
                abstract: true,
                data: {isPublic: true},
                controller: 'mainCtrl',
                templateUrl: "/app/config/views/layout.html"
            })*/

            .state('main-catalog', {
                url: "/",
                templateUrl: "/app/config/views/main-catalog.html",
                resolve: resolveModule('articleProvider', 'catalogProvider', 'articlesCtrl')
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
    
        function resolveModule(moduleName) {
            return {
                loadModules: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(moduleName);
                }]
            }
        }

})();