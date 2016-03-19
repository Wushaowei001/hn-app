function StoriesDataService ($http) {

    return {
        getTopStoriesList,
        getNewStoriesList,
        getStoryContent
    };

    function getTopStoriesList () {
        return $http.get('/stories').then((result) => {
            return result.data;
        });
    }

    function getNewStoriesList () {
        return $http.get('/newstories').then((result) => {
            return result.data;
        });
    }

    function getStoryContent(storyId) {
        return $http.get(`/stories/${storyId}`);
    }


}

export default StoriesDataService;