
export function AddCommentErrored(state = false, action) {
    switch (action.type) {
        case 'ADD_COMMENT_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}

export function AddCommentLoading(state = false, action) {
    switch (action.type) {
        case 'ADD_COMMENT_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}
