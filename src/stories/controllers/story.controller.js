const viewTypes = {top: 0, newest: 1};

class StoriesController {

    constructor(StoriesService, $state, $stateParams, $sce) {
        this.StoriesService = StoriesService;
        this.$sce = $sce;
        this.$state = $state;

        StoriesService.getStoryContent($stateParams.storyId);
    }

    renderHtml (text) {
        return this.$sce.trustAsHtml(text);
    }

    goBack () {
        this.$state.go('stories');
    }

}

export default StoriesController;
