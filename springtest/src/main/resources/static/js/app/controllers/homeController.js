(function () {
    "use strict";
    function homeController() {
        var vm=this;
        vm.error = function(name) {
            var s = vm.form[name];
            return s.$invalid && s.$dirty ? "has-error" : "";
        };
    }
    angular.module("mlevel").controller("homeController", homeController);
}());