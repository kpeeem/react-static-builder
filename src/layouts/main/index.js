import {Route} from 'react-router-dom'
import React, { Component } from 'react';
import Main  from 'pages/Main';
import About  from 'pages/About';
import Work   from 'pages/Work';
import Blog   from 'pages/Blog';
import Where  from 'pages/Where';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { connect } from 'react-redux';

import style from './index.styl'
export default class extends Component {
    render() {
        return (
            <div className={style.layout}>
                <div className={style.background}></div>
                <Header />
                <section className={style.content}>
                    <Route exact path="/" component={Main} />
                    <Route path="/about" component={About} />
                    <Route path="/work" component={Work} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/where" component={Where} />
                </section>
                {/*<Footer />*/}
            </div>
        )
    }
}

