import React, { Component } from 'react';
import './TestPage.css';
import StripeCheckout from '../../../components/StripeCheckout/StripeCheckout.js';
import {Elements, StripeProvider} from 'react-stripe-elements';


class TestPage extends Component {
  state = {
    name: "Donald Duck",
    address_line1: "123 Acme Ave.",
    address_line2: "Unit 199",
    address_city: "Tinseltown",
    address_state: "CA",
    address_zip: "54321",
    cardBack_text: "Dear Grandma,<br />I love you very much.<br />Don't be like Arthur.<br />Love, Andrew",
    cardFront_image: "arthur_fist",
    //added card_id in state to allow passing into stripe checkout prop
    card_id: null,
  }

  
  onChange = (e) => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  submit = () => {
    const formData = {
      toAddress: {
        name: this.state.name,
        address_line1: this.state.address_line1,
        address_line2: this.state.address_line2,
        address_city: this.state.address_city,
        address_state: this.state.address_state,
        address_zip: this.state.address_zip,
        address_country: "US"
      },
      cardBack_text: this.state.cardBack_text,
      cardFront_image: this.state.cardFront_image,
      status: "saved",
      stripeChargeId: null,
      lobApiId: null,
      createDate: new Date(),
      lastModifiedDate: null,
    };

    fetch('/api/mongodb/sendapostcard/postcards', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);
        
        //set state with returned card id
        this.setState({
          card_id: data.results.insertedIds[0],
        })
        // Redirect to home page
        //this.props.history.push('/');
      });
  }

  render() {
    const hasCardId = this.state.card_id
    return (
      <div className="WriteArticle">
        <h1>Create a Postcard</h1>
        <input
            name="name"
            placeholder="Recipient Name"
            value={this.state.name}
            onChange={this.onChange}
          />
        <br />
        <input
            name="address_line1"
            placeholder="Address Line 1"
            value={this.state.address_line1}
            onChange={this.onChange}
          />
        <br />
        <input
            name="address_line2"
            placeholder="Address Line 2"
            value={this.state.address_line2}
            onChange={this.onChange}
          />
        <br />
        <input
            name="address_city"
            placeholder="City"
            value={this.state.address_city}
            onChange={this.onChange}
          />
        <br />
        <input
            name="address_state"
            placeholder="State"
            value={this.state.address_state}
            onChange={this.onChange}
          />
        <br />
        <input
            name="address_zip"
            placeholder="Zip code"
            value={this.state.address_zip}
            onChange={this.onChange}
          />
        <br />

        <textarea
            name="cardBack_text"
            placeholder="Text"
            value={this.state.cardBack_text}
            onChange={this.onChange}
          />

        <br />

        <button onClick={this.submit}>Send Postcard</button>
        

        { //check if there is a card_id in state, if yes - show stripe checkout
          //pass card_id via props
          hasCardId ? 
            (
              <StripeProvider apiKey="pk_test_REGGeT4oO3tm4dsgHEo4Uisr00bsqbcD1w">
                <div className="example">
                 <h1>React Stripe Elements Example</h1>
                   <Elements>
                     <StripeCheckout 
                    card_id={this.state.card_id} />
                   </Elements>
                </div>
              </StripeProvider>
            ) : (
              <div>No Card ID yet</div>) }


      </div>

    );
  }
}

export default TestPage;
