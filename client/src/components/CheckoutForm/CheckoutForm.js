import React, { Component } from 'react';
import './CheckoutForm.css';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { Redirect } from 'react-router-dom'

// import StripeCheckout from '../StripeCheckout/StripeCheckout.js';

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            complete: false,
            error: false,
            lobCardID: null,
            validationErrorMessage: '',
        };
        this.submit = this.submit.bind(this);
    }

    handleChange = ({ error }) => {
        if (error) {
            console.log(error);
            this.setState({ validationErrorMessage: error.message });
        } else {
            console.log("no error");
            this.setState({ validationErrorMessage: '' });
        }
    };

    async submit(ev) {
        ev.preventDefault();
        let { token } = await this.props.stripe.createToken({ name: "Name" });
        //Adding props for card id to allow passing card_id
        await fetch("/charge/" + this.props.card_id, {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: token.id
        }).then(response => response.json())
            .then(data => {
                this.setState({ lobCardID: data.postcard });
            })
    }

    render() {
        if (this.state.lobCardID) {
            return <Redirect to={'/thank-you/' + this.state.lobCardID} />;
        }
        if (this.state.error)
            return <div><h4>Something went wrong.</h4><p>You were not charged.</p><p>Please refresh the page and try again.</p></div>;
        return (
            <div className="CheckoutForm">
                <h4>Payment Info</h4>
                <div className="CheckoutForm-stripe">
                    <CardElement
                        style={{ base: { fontSize: '18px' } }}
                        onChange={this.handleChange}
                    />
                </div>
                {/* <h4>Order Details</h4> */}
                <div className="CheckoutForm-total">
                    <p>Order total</p>
                    <p>$2.00</p>
                </div>
                {/* <button onClick={this.props.submit}>Send</button> */}
                <div className="error" role="alert">
                    {this.state.validationErrorMessage}
                </div>
                <div className="CheckoutForm-submitButtonArea">
                    <button
                        disabled={this.state.validationErrorMessage.length !== 0}
                        onClick={this.submit}
                    >
                        Submit Payment
                </button>
                </div>
            </div>
        )
    }
}

export default injectStripe(CheckoutForm);