
export function deletePostErrored(state = false, action) {
    switch (action.type) {
        case 'DELETE_POST_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}

export function deletePostIsLoading(state = false, action) {
    switch (action.type) {
        case 'DELETE_POST_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}
