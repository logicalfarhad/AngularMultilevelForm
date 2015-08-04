(function () {
    "use strict";
    function homeController() {
        var vm=this;
        vm.step=1;
        vm.previousStep=previousStep;
        vm.nextStep=nextStep;
        vm.save=save;

        function previousStep(){
            vm.step--;
        }
        function nextStep(){
            vm.step++;
        }
        function save(model) {
            console.log(model);
            //rest call goes here
        }
    }
    angular.module("mlevel").controller("homeController", homeController);
}());