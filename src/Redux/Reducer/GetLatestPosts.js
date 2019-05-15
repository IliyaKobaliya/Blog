
export function getLatestPostsErrored(state = false, action) {
    switch (action.type) {
        case 'GET_LATEST_POSTS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}

export function getLatestPostsIsLoading(state = false, action) {
    switch (action.type) {
        case 'GET_LATEST_POSTS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function LatestPosts(state = [], action) {
    switch (action.type) {
        case 'GET_LATEST_POSTS_SUCCESS':
            return action.posts;
        case 'DELETE_POST_SUCCESS':
            return action.posts;
        default:
            return state;
    }
}