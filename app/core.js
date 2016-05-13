(function () {

    angular
        .module('main', ['ui.router', 'ngResource', 'oc.lazyLoad'])
        .config(['$ocLazyLoadProvider', mainConfig])

        function mainConfig($ocLazyLoadProvider) {
            $ocLazyLoadProvider.config({
                    modules: [

                        /* Providers */
                        {
                            name: 'articleProvider',
                            files: ['/app/modules/services/articleProvider.js']
                        },

                        {
                            name: 'catalogProvider',
                            files: ['/app/modules/services/catalogProvider.js']
                        }

                    ]
                })
        }

})();