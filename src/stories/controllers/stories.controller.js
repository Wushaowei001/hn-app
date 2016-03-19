const viewTypes = {top: 0, newest: 1};

class StoriesController {

    constructor(StoriesService, $state) {
        this.StoriesService = StoriesService;
        this.selectedView = viewTypes.top;
        this.$state = $state;
        StoriesService.getTopStoriesList();
    }


    selectViewType (viewtype, getMethod, collection) {
        this.selectedView = viewTypes[viewtype];

        if (!this.StoriesService[collection].length) {
            this.StoriesService[getMethod]();
        }
    }

    reloadList () {
        if (this.selectedView === viewTypes.top){
            this.StoriesService.topStories = [];
            this.StoriesService.getTopStoriesList();
        } else if (this.selectedView === viewTypes.newest) {
            this.StoriesService.newStories = [];
            this.StoriesService.getNewStoriesList();
        }
    }

}

export default StoriesController;
