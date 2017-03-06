import React, { Component } from 'react';
import Menu   from 'components/Menu';
import PopoverMenu   from 'components/PopoverMenu';
import Burger   from 'components/Burger';
import style from './index.styl'

class Header extends Component {
  constructor(){
    super();
  }
    state = {
        show:false
    };

  toggleShow(){
      this.setState({
          show:!this.state.show
      });
  }

  render() {
    return (
        <header className={style.main}>
          <Menu />
            {this.state.show && <PopoverMenu toggleShow={::this.toggleShow} />}
            <Burger
                show={this.state.show}
                toggleShow={::this.toggleShow}
            />
        </header>
    )
  }
}

export default Header



