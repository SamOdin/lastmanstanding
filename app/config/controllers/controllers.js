(function () {

    angular
        .module('main')
        .constant('activeCategory', "btn-primary")
        /*.controller('mainCtrl', [$scope, 'articleProvider', 'catalogProvider', mainCtrl])*/
        .controller('articlesCatalogCtrl', articlesCatalogCtrl)
        .controller('randomArticlesCtrl', ['$rootScope', '$scope', randomArticlesCtrl])
        .controller('articlesCtrl', ['$rootScope', 'articleProvider', 'catalogProvider', articlesCtrl])

            /*function mainCtrl($scope, articleProvider, catalogProvider) {

                $scope.randomArticles = [];

                articleProvider.getArticles().$promise.then(function (res) {
                    $scope.articles = res;

                    var randomNumbers =
                        (Math.floor(Math.random() * (res.length - (res.length / 2)) + (res.length / 2)));
                    for (var i = 0; i < 4; i++) {
                        $scope.randomArticles.push(res[randomNumbers]);
                    }

                });

                catalogProvider.getCatalog().$promise.then(function (res) {
                    $scope.catalog = res;
                });

            }*/

            function articlesCtrl($rootScope, articleProvider, catalogProvider) {

                $rootScope.randomArticles = [];

                articleProvider.getArticles().$promise.then(function (res) {
                    $rootScope.articles = res;

                    var randomNumbers =
                        (Math.floor(Math.random() * (res.length - (res.length / 2)) + (res.length / 2)));
                    for (var i = 0; i < 4; i++) {
                        $scope.randomArticles.push(res[randomNumbers]);
                        console.log(randomArticles);
                    }

                });

                catalogProvider.getCatalog().$promise.then(function (res) {
                    $rootScope.catalog = res;
                });

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