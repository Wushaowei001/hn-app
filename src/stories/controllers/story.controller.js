const viewTypes = {top: 0, newest: 1};

class StoriesController {

    constructor(StoriesService, $state, $stateParams) {
        this.StoriesService = StoriesService;

        StoriesService.getStoryContent($stateParams.storyId);
    }


}

export default StoriesController;
