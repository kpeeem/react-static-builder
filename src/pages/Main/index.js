import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import cl from 'classnames';
import style from './index.styl'
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return { state: state }
}

function mapDispatchToProps(dispatch) {
    return {
        background: amount => dispatch({ type: 'CHANGE_BACKGROUND' , data: amount}),
    }
}

class main extends Component {
    constructor(){
        super();
    }

    render() {
        return <div className={style.wrapper}>
                <div className={cl(style.container)}>
                    <div className={style.row}>
                        <div className={cl(style.about, style.item)} >
                            <Link className={style.linkFrom} to={'/about'}>
                                <h1 className={style.h1}>
                                    Привет!
                                    <br/>
                                    Я Андрей
                                </h1>
                            </Link>
                        </div>

                         <div className={cl(style.work, style.item)}>
                             <Link className={style.linkFrom} to={'/work'}>
                                 <div className={style.workTitle}>
                                     <h2 className={style.h2}>Javascript разработчик</h2>
                                 </div>
                                 <div className={style.workSubTitle}>
                                     <h2 className={style.h2}>ReactJS/NodeJS</h2>
                                 </div>
                                 <div className={style.workBottom}>
                                     <h2 className={style.h2}>JS</h2>
                                 </div>
                            </Link>
                        </div>
                    </div>
                    <div className={style.row}>
                        <div className={cl(style.where, style.item)}>
                            <Link className={style.linkFrom} to={'/where'}>
                                <h2 className={style.h2}>Ссылки</h2>
                            </Link>
                        </div>
                        <div className={cl(style.blog, style.item)}>
                            <Link className={style.linkFrom} to={'/blog'}>
                                <h2 className={style.h2}>Заметки</h2>
                                <div>
                                    {
                                        [...Array(7).keys()].map(i =>  <div className={style.circle} />)
                                    }
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(main)




