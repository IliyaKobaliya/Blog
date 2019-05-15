export function getPost(state = false, action) {
    switch (action.type) {
        case 'GET_POSTS':
            return action.posts;
        default:
            return state;
    }
}


