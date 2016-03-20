function StoriesDataService ($http) {

    return {
        getTopStoriesList,
        getNewStoriesList,
        getStoryContent
    };

    function getShortcut (route, offline) {
        return $http.get(route, {
            params: {
                offline: offline
            }
        }).then((result) => {
            return result.data;
        }, (error) => {
            return error;
        });
    }

    function getTopStoriesList (offline) {
        return getShortcut('/stories', offline);
    }

    function getNewStoriesList (offline) {
        return getShortcut('/newstories', offline);
    }

    function getStoryContent(offline, storyId) {
        return getShortcut(`/stories/${storyId}`, offline);
    }


}

export default StoriesDataService;