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
                    Таааакс... Тут должны быть записи
                </h2>
            </div>
        )
    }
}



