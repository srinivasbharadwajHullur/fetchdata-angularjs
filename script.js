var app = angular.module('myApp', []);
app.controller('dataController',function ($scope,$http) {
    $http.get('https://api.covid19api.com/world/total').then(function (response) {
        $scope.total = response.data.TotalConfirmed
        $scope.recovered = response.data.TotalRecovered
        $scope.deaths = response.data.TotalDeaths
    },
    function (error) {
        console.log(error)
    })

    // Individual country data
    $scope.countryData = function () {
        country = $scope.country
        $http.get('https://covid19.mathdro.id/api/countries/' + country).then(function (response) {
            $scope.countrytotal = response.data.confirmed.value;
            $scope.countryrecovered = response.data.recovered.value;
            $scope.countrydeaths = response.data.deaths.value
        },
        function (error) {
            console.log(error)
        } 
        )}
})