(function () {
    "use strict";
    function homeController($http) {
        var vm=this;
        vm.error = function(name) {
            var s = vm.form[name];
            return s.$invalid && s.$dirty ? "has-error" : "";
        };
        /*
        var person ={
            Id:1,
            name:"forhad",
            email:"forhad.univdhaka@gmail.com"
        };

        var speaker={
             Id:2,
             name:"dummy",
             age:25
        };
        $http({
            method:"POST",
            url:"/save",
            contentType: 'application/json',
            dataType:"json",
            data:JSON.stringify({
                person:person,
                speaker:speaker
            })
        }).success(function(data){
            console.log(data);
        }).error(function(e){
            console.log(e);
        });*/
        vm.processForm=function(speaker,speech){
            console.log(speaker);
            console.log(speech);
        }
    }
    homeController.$inject=["$http"];
    angular.module("mlevel").controller("homeController", homeController);
}());
