import React, { Component } from 'react';
import style from '../styles/main.styl'

export default class extends Component {
  constructor(){
    super();

    this.state = {
      value: 1
    }
  }

  changed(event){
    this.setState({
      value: event.target.valueAsNumber
    })
  }

  render() {
    return <div className={style.main}>
      Page ONE!
      <input type="number" value={this.state.value} onChange={e => this.changed(e)} />
    </div>   
  }
}



