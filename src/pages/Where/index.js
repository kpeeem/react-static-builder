import React, { Component } from 'react';
import style from './index.styl'

export default class extends Component {
    constructor(){
        super();
    }

    render() {
        return(
            <div className={style.main}>
                <h2 className={style.slogan}>
                    <a className={style.link} href="http://github.com/kpeeem">GitHub</a>
                </h2>
            </div>
        )
    }
}



