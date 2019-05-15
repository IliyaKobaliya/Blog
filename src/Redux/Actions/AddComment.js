import * as axios from 'axios';

export function AddCommentErrored(bool) {
    console.log(`ошибка создания комментария`);
    return {
        type: 'ADD_COMMENT_ERRORED',
        hasErrored: bool
    };
}

export function AddCommentLoading(bool) {
    console.log(`Создание комментария ${ bool ? `началась` : `закончилась`}`);
    return {
        type: 'ADD_COMMENT_LOADING',
        isLoading: bool
    };
}


export function AddCommentSuccess(comments) {
    console.log(
        `Комментарий создан`
    );
    return {
        type: 'ADD_COMMENT_SUCCESS',
        comments
    };
}


export function AddComment(options, comments) {
    return (dispatch) => {
        dispatch(AddCommentLoading(true));
        axios(options)
            .then((response) => {
                if (response.status >= 400) {
                    throw Error(response.statusText);
                }
                dispatch(AddCommentLoading(false));
                return response
            })
            .then(response => dispatch(AddCommentSuccess([...comments, response.data])))
            .catch(() => dispatch(AddCommentErrored(true))
            )
        ;
    };
}
