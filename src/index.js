import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import RouterApp from "./Router"
import {Provider,ReactReduxContext } from "react-redux"
import { ConnectedRouter } from 'connected-react-router'
import './Assets/Css/Style.css'
import configureStore, { history } from './ConfigurateStore'

const store = configureStore();

class App extends Component {

    render() {
        return (
            <Provider store={store} context={ReactReduxContext}>
                <ConnectedRouter history={history} context={ReactReduxContext}>
                    <RouterApp/>
                </ConnectedRouter>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

