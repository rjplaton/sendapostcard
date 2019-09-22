import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import './StripeCheckout.css';

class StripeCheckout extends Component {
  constructor(props) {
  super(props);
  this.state = {
    complete: false,
    error: false,
  };
  this.submit = this.submit.bind(this);
}

async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    //Adding props for card id to allow passing card_id
    let response = await fetch(("/charge/" + this.props.card_id), {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });

    if (response.ok) {
      console.log("Purchase Complete!");
      this.setState({complete: true});
    } else {
      this.setState({error: true})
      console.log("Charge failed.")
    }
}

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    if (this.state.error) 
      return <div><h1>Something went wrong.</h1><p>You were not charged.</p><p>Please try again.</p></div>;

    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(StripeCheckout);