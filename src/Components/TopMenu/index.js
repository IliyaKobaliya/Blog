import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';


const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
});

class TopMenu extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar color={`secondary`} position="fixed">
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                          Blog
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

TopMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopMenu);