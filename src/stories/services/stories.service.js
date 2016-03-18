class StoriesService {

    constructor (StoriesDataService) {
        this.StoriesDataService = StoriesDataService;
        this.storiesList = [];
    }

    getStoriesList () {
        return this.StoriesDataService.getStoriesList();
    }

    getStoryContent () {
        return this.StoriesDataService.getStoryContent();
    }

    getStoryComments () {
        return this.StoriesDataService.getStoryComments();
    }

}

export default StoriesService;