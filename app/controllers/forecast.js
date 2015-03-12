/**
 * Created by Gary on 3/9/2015.
 */
'use strict';

(function(){

    function forecastController(weatherService, geolocation, $log){
        var vm = this;

        function getForecast(){
            geolocation.getLocation().then(function(position){
                return position;
            }, function(error){
                $log.error(error);
            }).then(function(position){
                weatherService.getForecastByCoords(position.coords.latitude, position.coords.longitude)
                    .then(function(data){
                        vm.simpleForecast = data.data.simpleforecast;
                        vm.DetailForecast = data.data.txt_forecast;
                        $log.info(data.data);
                    },function(error){
                        $log.error(error);
                    });
            });
        }

        getForecast();
    }

    forecastController.$inject = ['weatherService', 'geolocation', '$log'];

    angular.module('materialWeatherApp')
    .controller('forecastController', forecastController);
})();