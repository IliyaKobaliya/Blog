
export function getCommentsErrored(state = false, action) {
    switch (action.type) {
        case 'GET_COMMENTS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}

export function getCommentsLoading(state = false, action) {
    switch (action.type) {
        case 'GET_COMMENTS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function getCommentsSuccess(state = [], action) {
    switch (action.type) {
        case 'GET_COMMENTS_SUCCESS':
            return action.comments;
        case 'ADD_COMMENT_SUCCESS':
            return action.comments;
        default:
            return state;
    }
}