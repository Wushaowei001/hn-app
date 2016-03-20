function StoriesDataService ($http) {

    return {
        getTopStoriesList,
        getNewStoriesList,
        getStoryContent
    };

    function simpleGet (route) {
        return $http.get(route).then((result) => {
            return result.data;
        });
    }

    function getWithCaching (route) {

    }

    function getTopStoriesList () {
        return simpleGet('/stories');
    }

    function getNewStoriesList () {
        return simpleGet('/newstories');
    }

    function getStoryContent(storyId) {
        return simpleGet(`/stories/${storyId}`);
    }


}

export default StoriesDataService;