import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './Page';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';

const routing = (
    <HashRouter >
        <div>
            <Switch>
                <Route exact path="/" component={Page} />
            </Switch>
        </div>
    </HashRouter>
);

ReactDOM.render(<Page />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
