import React, { Component } from 'react';
import './Postcard.css';

class Postcard extends Component {
    state = {
        isFlipped: false,
        default_value: {
            message: "Hello Friend,",
            latin_message: "Dolor sit amet, consectetur adipiscing elit. Etiam leo purus, laoreet in ex vel, eleifend pharetra sapien. Pellentesque nec mauris eget lectus porttitor imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet, consectetur adipiscing elit. Etiam leo purus, laoreet in ex vel, eleifend pharetra sapien.",
            recName: "Somename Somebody",
            recAddress1: "123 Sesame Street",
            recAddress2: "Apartment 3",
            recCity: "New York",
            recState: "NY",
            recZip: "00000",
        },
    }

    render() {
        const messageHTML = this.props.formData.messageHTML || this.state.default_value.message;

        const address2 = this.props.formData.recAddress2 ? <span><span>{this.props.formData.recAddress2}</span><br /></span> : <span></span>;
        return (
            <div className="Postcard">
                <div className={"Postcard-inner ".concat(this.props.showBackClass)} >
                    <div className="Postcard-front" onClick={() => this.props.flipPostCard()}>
                        <img src={"../postcard_front_templates/" + this.props.fileName + ".jpg"} alt="postcard front" />
                    </div>
                    <div className="Postcard-back">
                        <div className="Postcard-message">
                            <span>
                                {messageHTML}
                            </span>
                        </div>
                        <div className="Postcard-addressSide">
                            <div className="Postcard-postage"><span>{"POSTAGE INDICIA"}</span></div>
                            <div className="Postcard-address">
                                <span>{this.props.formData.recName || this.state.default_value.recName}</span><br />
                                <span>{this.props.formData.recAddress1 || this.state.default_value.recAddress1}</span><br />
                                {address2}
                                <span>
                                    {this.props.formData.recCity || this.state.default_value.recCity}{`, `}
                                    {this.props.formData.recState || this.state.default_value.recState}{` `}
                                    {this.props.formData.recZip || this.state.default_value.recZip}
                                </span><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Postcard;
