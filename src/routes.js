import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main  from 'pages/Main';
import About  from 'pages/About';
import Work   from 'pages/Work';
import Blog   from 'pages/Blog';
import Where  from 'pages/Where';
import App from './App';

const NotFound = () => <h4>Not found 😞</h4>;

export const routes = (
    <Route path='/' title='App' component={App}>
        <IndexRoute title='App' component={Main} />
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
        <Route path="/blog" component={Blog} />
        <Route path="/where" component={Where} />
        <Route path='*' title='404: Not Found' component={NotFound} />
    </Route>
);


export default routes;