import {combineReducers} from "redux";
import {connectRouter} from 'connected-react-router'
import {getLatestPostsErrored, getLatestPostsIsLoading, LatestPosts} from "./GetLatestPosts";
import {deletePostErrored, deletePostIsLoading} from "./DeletePost";
import {getCommentsErrored,getCommentsLoading,getCommentsSuccess} from "./GetComments";
import {AddCommentErrored,AddCommentLoading} from "./AddComment";


const rootReducer = (history) => combineReducers({
    getLatestPostsErrored, getLatestPostsIsLoading, LatestPosts,
    deletePostErrored, deletePostIsLoading,
    getCommentsErrored,getCommentsLoading,getCommentsSuccess,
    AddCommentErrored,AddCommentLoading,
    router: connectRouter(history),
});
export default rootReducer;