class StoriesService {

    constructor (StoriesDataService) {
        this.StoriesDataService = StoriesDataService;
        this.topStories = [];
        this.newStories = [];
        this.loading = false;
    }

    getTopStoriesList () {
        this.loading = true;
        this.StoriesDataService.getTopStoriesList().then(list => {
            this.topStories = list;
            this.loading = false;
        });
    }

    getNewStoriesList () {
        this.loading = true;
        this.StoriesDataService.getNewStoriesList().then(list => {
            this.newStories = list;
            this.loading = false;
        });
    }

    getStoryContent () {
        return this.StoriesDataService.getStoryContent();
    }

    getStoryComments () {
        return this.StoriesDataService.getStoryComments();
    }

}

export default StoriesService;