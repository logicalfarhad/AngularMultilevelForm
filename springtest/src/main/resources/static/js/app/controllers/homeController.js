(function () {
    "use strict";
    function homeController($http) {
        var vm=this;
        vm.error = function(name) {
            var s = vm.form[name];
            return s.$invalid && s.$dirty ? "has-error" : "";
        };
        vm.processForm=function(speaker,speech){
            console.log(speaker);
            var fd=new FormData();
            angular.forEach(speaker, function (value, key) {
                fd.append(key, value);
            });

            $http.post("/save", fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            }).then(function (data) {
                console.log("it works!");
            }, function (error) {
                console.log("no");
            });
        }
    }
    homeController.$inject=["$http"];
    angular.module("mlevel").controller("homeController", homeController);
}());
