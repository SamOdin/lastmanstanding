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
})();