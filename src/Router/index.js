//////////////   React     ///////////////////////
import React, {Component} from 'react';
///////////// Material UI  //////////////////////
import Grid from '@material-ui/core/Grid';
//////////////    Router   /////////////////////
import {Route, Redirect} from 'react-router-dom';
//////////////   Routes  ///////////////////////
import AppRoutes from './Routes'
/////////////// Components /////////////////////
import TopMenu from '../Components/TopMenu'
import ViewPost from '../Components/ViewPost'

////////////////////////////////////////////////


class RouterApp extends Component {
    render() {
        this.routes = AppRoutes.map(item => {
            return (
                <Route path={item.path} component={item.component} key={item.key}/>
            )
        });
        return (

            <Grid container>
                <Grid item xs={12} lg={10}>
                    <TopMenu/>
                    <Route exact path="/" render={() => (<Redirect to="/LatestPosts"/>)}/>
                    {this.routes}
                    {/*<Route path="/ViewPost" component={ViewPost}/>*/}
                    <Route path="/ViewPost/posts/:id" component={ViewPost}/>
                </Grid>
            </Grid>

        )
    }
}

export default RouterApp;