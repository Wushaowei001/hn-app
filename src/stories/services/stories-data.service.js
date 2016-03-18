function StoriesDataService ($http) {

    return {
        getStoriesList,
        getStoryContent,
        getStoryComments
    };

    function getStoriesList () {
        return $http.get('/stories').then((result) => {
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