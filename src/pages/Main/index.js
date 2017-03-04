import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import cl from 'classnames';
import style from './index.styl'

export default class extends Component {
    constructor(){
        super();

    }

    render() {
        return <div className={style.wrapper}>
                <div className={cl(style.container)}>
                    <div className={style.row}>
                        <div className={cl(style.about, style.item)}>
                            <Link className={style.link} to={'/about'}>
                                <h1 className={style.h1}>
                                    Привет!
                                    <br/>
                                    Я Андрей
                                </h1>
                            </Link>
                        </div>

                         <div className={cl(style.work, style.item)}>
                             <div className={style.workTitle}>
                                 <h2 className={style.h2}>Javascript разработчик</h2>
                             </div>
                             <div className={style.workSubTitle}>
                                 <h2 className={style.h2}>ReactJS/NodeJS</h2>
                             </div>
                             <div className={style.workBottom}>
                                 <h2 className={style.h2}>JS</h2>
                             </div>

                        </div>
                    </div>
                    <div className={style.row}>
                        <div className={cl(style.where, style.item)}>
                            <h2 className={style.h2}>Где я</h2>
                        </div>
                        <div className={cl(style.blog, style.item)}>
                            <h2 className={style.h2}>Записки</h2>
                        </div>
                    </div>
                </div>
            </div>
    }
}





