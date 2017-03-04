import React, { Component } from 'react';
import style from './index.styl'

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
            ABOUT!
            <input type="number" value={this.state.value} onChange={e => this.changed(e)} />
        </div>
    }
}



