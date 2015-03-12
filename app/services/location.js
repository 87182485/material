/**
 * Created by Gary on 3/8/2015.
 */
(function(navigator){
    locationService.$inject = ['$log'];

    function locationService($log){
        var browserSupportFlag = false;

        if(navigator.getlocation){
            browserSupportFlag = true;
        }

        function getLocation(){
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(function(position) {
                    return position;
                }, function(error) {
                    $log.error(error);
                });
            }
        }

        return {
            browserSupportFlag:browserSupportFlag,
            getLocation:getLocation
        };
    }

    angular.module('materialWeatherApp')
    .factory('locationService',locationService);
})(navigator);