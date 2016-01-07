//called the module method on angular
var myApp = angular.module('weatherApp', [])
//calliong a controler method on my app, array takes name of service that is being passed in to
myApp.controller('homecontroller', ['$scope', 'cityService', function($scope, 'cityService') {
    //put city there because without it it wouldnt live anywhere else
                                    $scope.city = cityService.city;
                                    $scope.$watch('city', function(){
                                       cityService.city = $scope.city; 
                                    })
                                    }])
//creating a new service by calling the service method
myApp.service('cityService', function(){
    this.city= "Denver, Co";
});
