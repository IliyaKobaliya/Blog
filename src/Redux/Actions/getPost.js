
export function getPosts(posts,ownProps) {
    console.log(
        `Комментарий создан`
    );
    return {
        type: 'GET_POSTS',
        post: posts.find(post => post.id === Number(ownProps.match.params.id))
    };
}


