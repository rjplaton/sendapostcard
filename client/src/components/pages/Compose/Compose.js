import React, { Component } from 'react';
import './Compose.css';
import Postcard from '../../Postcard/Postcard.js';
import Sidebar from '../../Sidebar/Sidebar.js';

class Compose extends Component {
    state = {
        title: '',
        text: '',
    }

    render() {
        return (
            <div className="Compose">
                <nav className="Compose-navigation">
                    <h1 className="Compose-title">Send a postcard</h1>
                </nav>

                <div className="Compose-cardArea">
                    <Postcard />
                </div>

                <div className="Compose-controlArea">
                    <Sidebar />
                </div>
            </div>
        )
    }
}

export default Compose;
