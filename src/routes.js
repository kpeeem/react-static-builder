import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Page1 from './components/Page1'
import Page2 from './components/Page2'
import App from './App';

const NotFound = () => <h4>Not found 😞</h4>;

export const routes = (
    <Route path='/' title='App' component={App}>
        <IndexRoute title='App' component={App} />
        <Route path='/page1'  component={Page1} />
        <Route path='/page2'  component={Page2} />
        <Route path='*' title='404: Not Found' component={NotFound} />
    </Route>
);


export default routes;