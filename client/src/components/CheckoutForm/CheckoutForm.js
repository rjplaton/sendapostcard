import React, { Component } from 'react';
import './CheckoutForm.css';
import {CardElement, injectStripe} from 'react-stripe-elements';
// import StripeCheckout from '../StripeCheckout/StripeCheckout.js';

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    async submit(ev) {
        console.log("SUBMITTED");
    }

    render() {
      return (
        <div className="CheckoutForm">
            <p>Would you like to complete the purchase?</p>
            <CardElement/>
            <div className="CheckoutForm-submitButtonArea">
                <button onClick={this.props.submit}>
                    Submit Payment
                </button>
            </div>
        </div>
      )
    }
}

export default injectStripe(CheckoutForm);
