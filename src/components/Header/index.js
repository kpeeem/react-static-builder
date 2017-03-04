import React, { Component } from 'react';
import Menu   from 'components/Menu';
import style from './index.styl'

class Header extends Component {
  constructor(){
    super();
  }


  render() {
    return (
        <header className={style.main}>
          <Menu />
        </header>
    )
  }
}

export default Header



