(function () {
    "use strict";
    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/profile");
        $stateProvider
            .state("/", {
                url: "/",
                templateUrl: "js/app/views/home.html",
                controller: "homeController",
                controllerAs: 'vm'
            })
            .state("/.profile",{
                url:"profile",
                templateUrl:"js/app/views/profile.html"
            })
            .state("/.presentation",{
                url:"presentation",
                templateUrl: "js/app/views/presentation.html"
            })
            .state("/.summary",{
                url:"summary",
                templateUrl: "js/app/views/summary.html"
            });
    }
    config.$inject=["$stateProvider", "$urlRouterProvider"];
    angular.module("mlevel").config(config);
}());