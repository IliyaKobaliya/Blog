import * as axios from 'axios';

export function deletePostErrored(bool) {
    console.log(`ошибка удаления сообщения`);
    return {
        type: 'DELETE_POST_ERRORED',
        hasErrored: bool
    };
}

export function deletePostIsLoading(bool) {
    console.log(`удаление сообщения ${ bool ? `началась` : `закончилась`}`);
    return {
        type: 'DELETE_POST_LOADING',
        isLoading: bool
    };
}


export function deletePostSuccess(posts) {
    console.log(
        `Сообщение удалено`
    );
    return {
        type: 'DELETE_POST_SUCCESS',
        posts
    };
}


export function deletePost(url,posts) {
    return (dispatch) => {
        dispatch(deletePostIsLoading(true));
        axios.delete(url)
            .then((response) => {
                if (response.status >= 400) {
                    throw Error(response.statusText);
                }
                dispatch(deletePostIsLoading(false));
                return response
            })
            .then(response =>{if(response.status === 200){dispatch(deletePostSuccess(posts))}})
            .catch(() => dispatch(deletePostErrored(true))
            )
        ;
    };
}
