(function () {

    angular
    .module('main')
    .factory('catalogProvider', ['$resource', function ($resource) {
        return $resource('/data/catalog.json', {  }, {
            'getCatalog': {
                method:'GET',
                isArray: true
            }
        });

    }])
    
})();