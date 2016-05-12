(function () {

    angular
        .module('main')
        .controller('articlesCatalogCtrl', articlesCatalogCtrl)
        .controller('articlesCtrl', ['$rootScope', 'articleProvider', 'catalogProvider', articlesCtrl])

            function articlesCtrl($rootScope, articleProvider, catalogProvider) {

                articleProvider.getArticles().$promise.then(function (res) {
                    $rootScope.articles = res;
                })

                catalogProvider.getCatalog().$promise.then(function (res) {
                    $rootScope.catalog = res;
                })

                

            }

            function articlesCatalogCtrl($scope) {

                var selectedCategory = null;

                $scope.selectCategory = function (newCategory) {
                    selectedCategory = newCategory;
                };

                $scope.getCategoryClass = function (category) {
                    return selectedCategory == category ? "btn-primary" : "";
                };

            }

})();