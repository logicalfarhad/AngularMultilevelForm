(function () {
    "use strict";
    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("/", {
                url: "/",
                templateUrl: "js/app/views/home.html",
                controller: "homeController",
                controllerAs: 'vm'
            });
    }
    angular.module("mlevel").config(config);
}())