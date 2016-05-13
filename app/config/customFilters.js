(function () {

    angular
        .module('main')
        .filter('searchFor', searchFor)
        .filter('unique', unique)

    function searchFor() {
        return function (arr, search) {
            if (!search) {
                return arr;
            }
            var result = [];
            search = search.toLowerCase();
            angular.forEach(arr, function (article) {
                if (article.title.toLowerCase().indexOf(search) !== -1 || article.text.toLowerCase().indexOf(search) !== -1) {
                    result.push(article)
                }
            });
            return result;
        }
    }

    function unique() {
        return function (data, propertyNumber) {
            if (angular.isArray(data) && angular.isString(propertyNumber)) {
                var results = [];
                angular.forEach($rootScope.articles, function () {

                })
            }
        }
    }

})();