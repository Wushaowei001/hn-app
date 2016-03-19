function StoriesDataService ($http) {

    return {
        getTopStoriesList,
        getNewStoriesList,
        getStoryContent,
        getStoryComments
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

    function getStoryComments (storyId) {
        return $http.get(`/comments/${storyId}`);
    }

}

export default StoriesDataService;