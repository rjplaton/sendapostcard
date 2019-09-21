import React, { Component } from 'react';
import './Compose.css';
import Postcard from '../../Postcard/Postcard.js';
import MessageFormCard from '../../MessageFormCard/MessageFormCard.js';

class Compose extends Component {
    state = {
        title: '',
        text: '',
        showBack: false,
        formData: {
            message: "Dolor sit amet, consectetur adipiscing elit. Etiam leo purus, laoreet in ex vel, eleifend pharetra sapien. Pellentesque nec mauris eget lectus porttitor imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet, consectetur adipiscing elit. Etiam leo purus, laoreet in ex vel, eleifend pharetra sapien.",
            recName: "Somename Somebody",
            recAddress1: "123 Sesame Street",
            recAddress2: "Apartment 3",
            recCity: "New York",
            recState: "NY",
            recZip: "00000",
        }
    }

    flipPostCard = () => {
        let current = this.state.showBack;
        this.setState({ showBack: !current });
        return !current;
    }

    forceFlipToBack = () => {
        this.setState({ showBack: true });
    }

    handleMessageChange = (event) => {
        // console.log(event.target.value);
        let formData = this.state.formData;
        formData.message = event.target.value;
        this.setState({formData: formData});
        // console.log("handlemessagechange");
    }

    handleFormChange = (event) => {
        let formData = this.state.formData;
        
        const target = event.target;
        const value = target.value;
        const name = target.name;

        formData[name] = value;

        this.setState({formData: formData});
        
        // console.log(this.state.formData);
    }

    render() {
        return (
            <div className="Compose">
                {/* <nav className="Compose-navigation">
                    <h1 className="Compose-title">Send a postcard</h1>
                </nav> */}

                <div className="Compose-cardArea">
                    <Postcard
                        formData={this.state.formData}
                        flipPostCard={this.flipPostCard} 
                        showBackClass={this.state.showBack? "Postcard-showBack": ""}
                    />
                </div>

                <div className="Compose-controlArea">
                    <MessageFormCard 
                        formData={this.state.formData}
                        flipPostCard={this.flipPostCard}
                        forceFlipToBack={this.forceFlipToBack}
                        handleMessageChange={this.handleMessageChange}
                        handleFormChange={this.handleFormChange}
                    />
                </div>
            </div>
        )
    }
}

export default Compose;
