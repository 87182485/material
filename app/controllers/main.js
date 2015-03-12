/**
 * Created by Gary on 3/8/2015.
 */
'use strict';

(function(){
    function mainController(weatherService, geolocation, $log){
        var vm = this;

        vm.name = 'Weather';

        vm.rainPredictionByDay = false;

        vm.showCityState = true;

        function getCurrentCondition(){
            geolocation.getLocation().then(function(position){
                return position;
            }, function(error){
                $log.error(error);
            }).then(function(position){
                weatherService.getWeatherObjectByCoords(position.coords.latitude, position.coords.longitude)
                    .then(function(data){
                        vm.condition = data.data.current_observation;
                        $log.info(vm.condition);
                    },function(error){
                        $log.error(error);
                    });
            });
        }

        vm.switchView = function(){
            vm.showCityState = !vm.showCityState;
        };

        vm.getCurrentTimer = function(time){
            return time;
        };

        getCurrentCondition();
    }

    mainController.$inject = ['weatherService', 'geolocation', '$log', '$rootScope'];

    angular.module('materialWeatherApp')
    .controller('mainController', mainController);
})();