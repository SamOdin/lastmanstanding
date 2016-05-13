(function () {

    angular
        .module('main')
        .constant('activeCategory', "btn-primary")
        .controller('articlesCatalogCtrl', articlesCatalogCtrl)
        .controller('randomArticlesCtrl', ['$rootScope', '$scope', randomArticlesCtrl])
        .controller('articlesCtrl', ['$rootScope', 'articleProvider', 'catalogProvider', articlesCtrl])

            function articlesCtrl($rootScope, articleProvider, catalogProvider) {

                articleProvider.getArticles().$promise.then(function (res) {
                    $rootScope.articles = res;
                })

                catalogProvider.getCatalog().$promise.then(function (res) {
                    $rootScope.catalog = res;
                })
            }

            function articlesCatalogCtrl($scope, activeCategory) {

                var selectedCategory = null;

                $scope.selectCategory = function (newCategory) {
                    selectedCategory = newCategory;
                };

                $scope.getCategoryClass = function (category) {
                    return selectedCategory == category ? activeCategory : "";
                };
            }
    
            function randomArticlesCtrl($rootScope, $scope) {
 
            }

})();