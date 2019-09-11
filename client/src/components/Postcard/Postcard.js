import React, { Component } from 'react';
import './Postcard.css';

class Postcard extends Component {
    state = {
        isFlipped: false,
    }

    onFlip = () => {
        let newValue = !this.state.isFlipped;
        console.log(this.state.isFlipped, newValue);
        this.setState({isFlipped: newValue});
        console.log(this.state.isFlipped);
    }

    getPostcardClassNames = () => {
        console.log("getPostcardClassNames");
        if (this.state.isFlipped) {
            console.log("isflipped");
            return "Postcard-inner Postcard-isFlipped";
        } else {
            console.log("else");
            return "Postcard-inner";
        }
    }

    render() {
      return (
        <div className="Postcard">
            <div className={this.getPostcardClassNames()} onClick={() => this.onFlip()}>
                <div className="Postcard-front">
                    <img alt="postcard" src="/alice-butenko.jpg"/>
                </div>
                <div className="Postcard-back">
                    <div className="Postcard-message">
                        <span>{"Lorem ipsum,"}</span><br/><br/>
                        <span>{"Dolor sit amet, consectetur adipiscing elit. Etiam leo purus, laoreet in ex vel, eleifend pharetra sapien. Pellentesque nec mauris eget lectus porttitor imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet, consectetur adipiscing elit. Etiam leo purus, laoreet in ex vel, eleifend pharetra sapien."}</span><br/><br/>
                        <span>Sincerley,</span><br/>
                        <span>Persony Thisperson</span>
                    </div>
                    <div className="Postcard-addressSide">
                        <div className="Postcard-postage">{"Place Stamp Here"}</div>
                        <div className="Postcard-address">
                            <span>Somename Somebody</span><br/>
                            <span>123 Sesame Street</span><br/>
                            <span>New York, NY 00000</span><br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
    }
}

export default Postcard;
