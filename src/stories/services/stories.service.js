class StoriesService {

    constructor (StoriesDataService, $window) {
        this.StoriesDataService = StoriesDataService;
        this.$window = $window;
        this.topStories = [];
        this.newStories = [];
        this.currentStory = null;
        this.loading = false;
        this.offLineMode = false;
    }

    getTopStoriesList () {
        this.topStories = [];
        this.loading = true;
        this.StoriesDataService.getTopStoriesList(this.offLineMode).then(list => {
            this.topStories = list;
            this.loading = false;
        });
    }

    getNewStoriesList () {
        this.newStories = [];
        this.loading = true;
        this.StoriesDataService.getNewStoriesList(this.offLineMode).then(list => {
            this.newStories = list;
            this.loading = false;
        });
    }

    getStoryContent (storyId) {
        this.currentStory = null;
        this.loading = true;
        this.StoriesDataService.getStoryContent(this.offLineMode, storyId).then(content => {
            this.currentStory = content;
            this.loading = false;
        });
    }

    openLink (url) {
        this.$window.open(url);
    }

}

export default StoriesService;