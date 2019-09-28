import React, { Component } from 'react';
import './FormCard.css';
import MessageForm from '../MessageForm/MessageForm.js';
import CheckoutForm from '../CheckoutForm/CheckoutForm.js'
import { Elements, StripeProvider } from 'react-stripe-elements';

const arrowSVG = <svg focusable="false" data-icon="angle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>;

class FormCard extends Component {

    render() {
        return (
            <div className="FormCard">
                {this.props.showCheckout ?
                    <div className="FormCard-writeButton" onClick={this.props.showMessageForm}>
                        {arrowSVG}
                        <p className="FormCard-write">Back to edit message</p>
                    </div>
                    :
                    <div className="FormCard-writeButton" onClick={this.props.flipPostCard}>
                        {arrowSVG}
                        <p className="FormCard-write">Type your message</p>
                    </div>
                }
                {this.props.showCheckout ?
                    <StripeProvider apiKey="pk_live_YzbZeTXWmebCvg5lOYuHBMuA00uGbxWbsO">
                        <div className="FormCard-checkout">
                            <Elements>
                                <CheckoutForm
                                    card_id={this.props.card_id}
                                />
                            </Elements>
                        </div>
                    </StripeProvider>
                    :
                    <MessageForm
                        formData={this.props.formData}
                        forceFlipToBack={this.props.forceFlipToBack}
                        handleMessageChange={this.props.handleMessageChange}
                        handleFormChange={this.props.handleFormChange}
                        checkout={this.props.checkout}
                    />
                }
            </div>
        )
    }
}

export default FormCard;
