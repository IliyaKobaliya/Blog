import * as axios from 'axios';

export function getLatestPostsErrored(bool) {
    console.log(`ошибка загрузки сообщений`);
    return {
        type: 'GET_LATEST_POSTS_ERRORED',
        hasErrored: bool
    };
}

export function getLatestPostsIsLoading(bool) {
    console.log(`загрузка сообщений ${ bool ? `началась` : `закончилась`}`);
    return {
        type: 'GET_LATEST_POSTS_LOADING',
        isLoading: bool
    };
}



export function getLatestPostsSuccess(posts) {
    console.log(
`Сообщения загружены`
);
    return {
        type: 'GET_LATEST_POSTS_SUCCESS',
        posts
    };
}


export function getLatestPosts(url) {
    return (dispatch) => {
        dispatch(getLatestPostsIsLoading(true));
        axios.get(url)
            .then((response) => {
                if (response.status >= 400) {
                    throw Error(response.statusText);
                }
                dispatch(getLatestPostsIsLoading(false));
                return response
            })
            .then(response => dispatch(getLatestPostsSuccess(response.data)))
            .catch(() => dispatch(getLatestPostsErrored(true))
            )
        ;
    };
}
