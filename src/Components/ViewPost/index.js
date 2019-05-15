import React, {Component} from 'react'
import {connect} from 'react-redux';
/////////////////////////////
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {AddComment} from "../../Redux/Actions/AddComment";
import {API_HOST} from "../../Config";
import {getComments} from "../../Redux/Actions/GetComments";
import AddNewComment from './AddComment'
import {withStyles} from "@material-ui/core/styles/index";
import {getLatestPosts} from "../../Redux/Actions/GetLatestPosts";
import CircularProgress from '@material-ui/core/CircularProgress';

///////////////////////////////////

const styles = {
    comments: {
        height: `40vh`, overflowY: `scroll`
    },
    DF: {
        display: `flex`, flexDirection: `row`, justifyContent: `space-between`
    },
    progress: {
        display: `flex`, alignItems: `center`, justifyContent: `center`
    }
};

class ViewPost extends Component {

    componentDidMount() {
        console.log(this.props.post === undefined);
        if (this.props.post === undefined) {
            const URL = `${API_HOST}/posts`;
            this.props.loadPosts(URL);
        }
        this.props.getComments(`${API_HOST}/posts/${this.props.ownProps.match.params.id}?_embed=comments`);
    }

    state = {
        commentText: ``
    };

    writeComment = (value) => {
        this.setState({commentText: `${value}`})
    };

    addComment = () => {
        const URL = `${API_HOST}/comments`;
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            data: {'postId': this.props.post.id, 'body': `${this.state.commentText}`},
            url: URL
        };
        this.props.addComment(options, this.props.comments)
    };

    render() {
        const {classes} = this.props;
        let post = this.props.post;


        if (this.props.isLoadComments) {
            console.log(this.props.isLoadComments);
            return <CircularProgress className={classes.progress} color="secondary"/>
        }
        if (this.props.post === undefined) {
            return <CircularProgress className={classes.progress} color="secondary"/>
        }
        return (
            <Grid container direction="row"
                  justify="center"
                  alignItems="center">
                <Grid item xs={8}>
                    <Card>
                        <CardContent>
                            <Typography color={`secondary`} variant="body1" gutterBottom>
                                {post.date}
                            </Typography>
                            <Typography variant="h5" gutterBottom>
                                {post.title}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {post.body}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                {post.author}
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography color={`secondary`} variant="body1" gutterBottom>
                                Comments
                            </Typography>
                            <div className={classes.comments}>
                                {this.props.comments.map(comment => <Grid item xs={12}
                                                                          key={comment.id}>{comment.body}<Divider/></Grid>)}
                            </div>
                        </CardContent>
                        <Divider/>
                        <CardActions>
                            <AddNewComment addComment={this.addComment} writeComment={this.writeComment}/>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(Number(ownProps.match.params.id));
    return {
        ownProps,
        post: state.LatestPosts.find(post => post.id === Number(ownProps.match.params.id)),
        comments: state.getCommentsSuccess,
        isLoadComments: state.getCommentsLoading
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        loadPosts: (url) => dispatch(getLatestPosts(url)),
        addComment: (url, comments) => dispatch(AddComment(url, comments)),
        getComments: (url) => dispatch(getComments(url))
    };
};
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ViewPost));