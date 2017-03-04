import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import cl from 'classnames';
import Stacked_Hamburger_Cutaway_hires from 'assets/img/Stacked_Hamburger_Cutaway_hires.jpg'

import style from './index.styl'

class Burger extends Component {
    constructor(){
        super();

    }
    state = {
        show:false
    };
    toggle(){
        this.setState({
            show:!this.state.show
        })
    }
    render() {
        return (
            <div>
                {this.state.show && <div onClick={::this.toggle} className={style.fade}>
                    <div className={style.menu}>
                        <Link className={style.link} to={'/'}>Главная</Link>
                        <Link className={style.link} to={'/about'}>Кто я</Link>
                        <Link className={style.link} to={'/work'}>Что делаю</Link>
                        <Link className={style.link} to={'/blog'}>Что думаю</Link>
                        <Link className={style.link} to={'/where'}>Где я</Link>
                    </div>
                    {/*<img className={style.burgerImage} src={Stacked_Hamburger_Cutaway_hires} alt=""/>*/}
                </div>}
                <div className={style.main}>
                    {!this.state.show ?
                        <div
                            onClick={::this.toggle}
                            className={style.burger}
                        >
                            🍔
                        </div>
                        :
                        <div
                            onClick={::this.toggle}
                            className={style.close}
                        >
                            ❌
                        </div>
                    }
                </div>

            </div>

        )
    }
}

export default Burger


