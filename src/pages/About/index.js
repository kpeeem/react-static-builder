import React, { Component } from 'react';
import style from './index.styl'

export default class extends Component {
    constructor(){
        super();
    }

    render() {
        return(
            <div className={style.main}>
                <h2 className={style.slogan}>Я Андрей и бородат</h2>
            </div>
        )
    }
}



