import React, {Component} from 'react'
import {API_HOST} from "../../Config";
import {connect} from 'react-redux'
import {getLatestPosts} from '../../Redux/Actions/GetLatestPosts';
import {deletePost} from '../../Redux/Actions/DeletePost';
/////////////////////////////
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {withStyles} from "@material-ui/core/styles/index";
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
///////////////////////////////////

const styles = {
    post: {
        paddingBottom: `20px`
    },
    DF: {
        display: `flex`, flexDirection: `row`, justifyContent: `space-between`
    }
};

const URL = `${API_HOST}/posts`;

class LatestPostsApp extends Component {

    componentDidMount() {
        this.props.loadPosts(URL);
    }

    deletePost = (id,index) => {
        this.props.deletePost(`${URL}/${id}`);
        let posts = this.props.LatestPosts;
        posts.splice(index, 1);
        this.props.loadPosts(URL,posts);
    };
    render() {
        const {classes} = this.props;

        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the posts</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <Grid container
                  direction="row"
                  justify="space-around"
                  alignItems="center">
                {this.props.LatestPosts.map((post,index) =>
                    <Grid className={classes.post} item xs={8} key={post.id}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {post.title}
                                    </Typography>
                                    <div className={classes.DF}>
                                        <Typography variant="body2" gutterBottom>
                                            {post.author}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            {post.date}
                                        </Typography>
                                    </div>
                                </CardContent>
                                <Divider/>
                                <CardActions className={classes.DF}>
                                    <Button size="small" color="secondary" onClick={() => {
                                        this.deletePost(post.id,index)
                                    }}>
                                        Delete
                                    </Button>
                                    <Link to={`/ViewPost/posts/${post.id}`}>
                                    <Button size="small" color="inherit">
                                        Read more...
                                    </Button>
                                    </Link>
                                </CardActions>
                            </Card>
                    </Grid>
                )}
            </Grid>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ownProps,
        LatestPosts: state.LatestPosts,
        Error: state.getLatestPostsErrored,
        Loading: state.getLatestPostsIsLoading

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadPosts: (url) => dispatch(getLatestPosts(url)),
        deletePost: (url,posts) => dispatch(deletePost(url,posts)),
    };
};

const LatestPosts = connect(
    mapStateToProps,
    mapDispatchToProps
)(LatestPostsApp);


export default withStyles(styles)(LatestPosts);