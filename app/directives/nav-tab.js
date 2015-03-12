/**
 * Created by Gary on 3/9/2015.
 */
(function(){



    angular.module('materialWeatherApp')
    .directive('navTab', ['$state', function($state){
            return {
                restrict:'E',
                templateUrl:'templates/nav-tab.html',
                scope:{},
                link:function($scope){
                    $scope.tabIndex = 0;

                    $scope.$watch('tabIndex', function(current){
                        switch (current){
                            case 0: $state.go('home');
                                break;
                            case 1: $state.go('forecast');
                                break;
                        }
                    })
                }
            };
        }]);
})();