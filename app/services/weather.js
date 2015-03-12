/**
 * Created by Gary on 3/8/2015.
 */
(function(){

    weatherService.$inject = ['weatherUrlApi', '$q', '$http'];

    function weatherService(weatherUrlApi, $q, $http){

        function getWeatherObjectByCoords(lat, long){
            var deferrd = $q.defer();

            var url = weatherUrlApi.conditionUrl + lat + ',' + long+weatherUrlApi.urlSuffix;
            var promise = $http({
                url:url,
                type:'GET',
                dataType:'jsonp'
            });

            deferrd.resolve(promise);

            return deferrd.promise;
        }

        function getForecastByCoords(lat, long){
            var deferrd = $q.defer();

            var url = weatherUrlApi.forecastUrl + lat + ',' + long+weatherUrlApi.urlSuffix;
            var promise = $http({
               url:url,
                type:'get',
                dataType:'jsonp'
            });

            deferrd.resolve(promise);

            return deferrd.promise;
        }

        function getForecastByCity(){

        }

        function getWeatherObjectByCity(city){
        }

        function getCityByCoords(lat, long){
            var deferrd = $q.defer();

            var url = weatherUrlApi.geoLookupUrl + lat + ',' + long + weatherUrlApi.urlSuffix;

            var promise = $http({
                url:url,
                type:'GET',
                dataType:'jsonp'
            });

            deferrd.resolve(promise);

            return deferrd.promise;
        }

        return {
            getWeatherObjectByCoords:getWeatherObjectByCoords,
            getCityByCoords:getCityByCoords,
            getWeatherObjectByCity:getWeatherObjectByCity,
            getForecastByCoords:getForecastByCoords
        };
    }

    angular.module('materialWeatherApp')
    .factory('weatherService', weatherService);
})();