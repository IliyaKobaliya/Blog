import * as axios from 'axios';

export function getCommentsErrored(bool) {
    console.log(`ошибка загрузки сообщений`);
    return {
        type: 'GET_COMMENTS_ERRORED',
        hasErrored: bool
    };
}

export function getCommentsLoading(bool) {
    console.log(`загрузка сообщений ${ bool ? `началась` : `закончилась`}`);
    return {
        type: 'GET_COMMENTS_LOADING',
        isLoading: bool
    };
}


export function getCommentsSuccess(comments) {
    console.log(
        `Сообщения загружены`
    );
    return {
        type: 'GET_COMMENTS_SUCCESS',
        comments
    };
}


export function getComments(url) {
    return (dispatch) => {
        dispatch(getCommentsLoading(true));
        axios.get(url)
            .then((response) => {
                if (response.status >= 400) {
                    throw Error(response.statusText);
                }
                dispatch(getCommentsLoading(false));
                return response
            })
            .then(response => dispatch(getCommentsSuccess(response.data.comments)))
            .catch(() => dispatch(getCommentsErrored(true))
            )
        ;
    };
}
