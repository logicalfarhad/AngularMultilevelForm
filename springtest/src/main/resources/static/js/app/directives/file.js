/**
 * Created by S.M.Farhad on 19/08/2015.
 */
(function () {
"use strict";
    function fileRead(){
        return {
            scope: {
                fileread: "="
            },
            link: function (scope, element, attributes) {
                element.bind("change", function (changeEvent) {
                    var reader = new FileReader();
                    reader.onload = function (loadEvent) {
                        scope.$apply(function () {
                            scope.fileread = loadEvent.target.result;
                        });
                    }
                    reader.readAsDataURL(changeEvent.target.files[0]);
                });
            }
        }
    }
    angular.module("mlevel").directive("fileRead",fileRead);
}());