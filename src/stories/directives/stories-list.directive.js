function storiesList () {
    return {
        restrict: 'E',
        scope: {
            list: '=list'
        },
        template: require('./stories-list.html'),
        controller: function ($scope, $state, StoriesService) {
            $scope.StoriesService = StoriesService;

            $scope.showStory =  function (id) {
                $state.go('story', {storyId: id})
            }
        }
    };
}

export default storiesList;
