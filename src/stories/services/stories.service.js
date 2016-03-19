class StoriesService {

    constructor (StoriesDataService) {
        this.StoriesDataService = StoriesDataService;
        this.topStories = [];
        this.newStories = [];
        this.currentStory = null;
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

    getStoryContent (storyId) {
        this.loading = true;
        this.StoriesDataService.getStoryContent(storyId).then(content => {
            this.currentStory = content;
            this.loading = false;
        });
    }


}

export default StoriesService;