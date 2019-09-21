import React, { Component } from 'react';
import './Postcard.css';

class Postcard extends Component {
    state = {
        isFlipped: false,
    }

    address2 = this.props.formData.recAddress2 ? <span><span>{this.props.formData.recAddress2}</span><br /></span> : <span></span>;

    render() {
        return (
            <div className="Postcard">
                <div className={"Postcard-inner ".concat(this.props.showBackClass)} >
                    <div className="Postcard-front" onClick={() => this.props.flipPostCard()}>
                        <img alt="postcard" src="/alice-butenko.jpg" />
                    </div>
                    <div className="Postcard-back">
                        <div className="Postcard-message">
                            <span>
                                {
                                    this.props.formData.message.split("\n").map((line, index) => (
                                        <span key={index}>{line}<br /></span>
                                    ))
                                }
                            </span>
                        </div>
                        <div className="Postcard-addressSide">
                            <div className="Postcard-postage">{"Place Stamp Here"}</div>
                            <div className="Postcard-address">
                                <span>{this.props.formData.recName}</span><br />
                                <span>{this.props.formData.recAddress1}</span><br />
                                {this.address2}
                                <span>{this.props.formData.recCity} {this.props.formData.recState} {this.props.formData.recZip}</span><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Postcard;
