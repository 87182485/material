/**
 * Created by Gary on 3/8/2015.
 * TODO: set up location info on $rootScope
 */
'use strict';

(function(){
    angular.module('materialWeatherApp', ['ui.router','ngMaterial', 'geolocation', 'ngAnimate'])
    .config(
        function($stateProvider, $urlRouterProvider){

            $stateProvider
            .state('home', {
                    url:'/home',
                    templateUrl:'templates/home.html',
                    controller:'mainController as main'
                })
            .state(
                'forecast',{
                    url:'/forecast',
                    templateUrl:'templates/forecast.html',
                    controller:'forecastController as forecast'
                }
            );

            $urlRouterProvider.otherwise('/home');
        });

    angular.module('materialWeatherApp').constant('weatherUrlApi', {
        conditionUrl:'http://api.wunderground.com/api/53e1e1063e141022/conditions/q/',
        forecastUrl:'http://api.wunderground.com/api/53e1e1063e141022/forecast/q/',
        geoLookupUrl:'http://api.wunderground.com/api/53e1e1063e141022/geolookup/q/',
        urlSuffix:'.json'
    });

})();