(function () {
    
    angular
        .module('main')
        .factory('articleProvider', ['$resource', function ($resource) {
            return $resource('/data/articles.json', {  }, {
                'getArticles': {
                    method:'GET',
                    isArray: true
                }
            });
        }])

        .factory('catalogProvider', ['$resource', function ($resource) {
            return $resource('/data/catalog.json', {  }, {
                'getCatalog': {
                    method:'GET',
                    isArray: true
                }
            });

        }])
    
})();