import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import style from './index.styl'

class Header extends Component {
    constructor(){
        super();
    }

    render() {
        return (
            <ul className={style.menu}>
                <Link className={style.link} to={'/'}>Main</Link>
                <Link className={style.link} to={'/about'}>About</Link>
                <Link className={style.link} to={'/work'}>Do</Link>
                <Link className={style.link} to={'/blog'}>Links</Link>
                <Link className={style.link} to={'/where'}>Where</Link>
            </ul>
        )
    }
}

export default Header


