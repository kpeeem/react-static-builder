import React, { Component } from 'react';
import style from './index.styl'
import cv from 'assets/docs/cv.pdf'

export default class extends Component {
    constructor(){
        super();
    }

    render() {
        return(
            <div className={style.main}>
                <h2 className={style.slogan}>
                    <a className={style.link} href={cv}>Скачать CV</a>
                </h2>
            </div>
        )
    }
}



