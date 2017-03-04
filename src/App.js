import { BrowserRouter} from 'react-router-dom'
import React, { Component } from 'react';
import Layout from './layouts/main'

export default class extends Component {
    render() {
        return <BrowserRouter>
            <Layout />
        </BrowserRouter>
    }
}

