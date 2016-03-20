function storiesList () {
    return {
        restrict: 'E',
        template: require('./offline-switcher.html'),
        controller: function ($scope, StoriesService) {
            $scope.StoriesService = StoriesService;
        }
    };
}

export default storiesList;
