import React, { Component } from 'react';
import './MessageFormCard.css';

class MessageFormCard extends Component {
    state = {
    }

    render() {
      return (
        <div className="MessageFormCard">
            <div className="MessageFormCard-writeButton">
                <p className="MessageFormCard-write">Type your message</p>
            </div>
            <form className="MessageFormCard-form">
              <span>
                <h4>Message</h4>
                <textarea/>
              </span>

              <span>
                <h4>Recipient Address</h4>
                <small>We can only send your postcard to an address within the US.</small>
              </span>

              <span>
                <label>Name</label>
                <input type="text"/>
              </span>

              <span>
                <label>Address 1</label>
                <input type="text"/>
              </span>

              <span>
                <label>Address 2</label>
                <input type="text"/>
              </span>

              <span>
                <label>City</label>
                <input type="text"/>
              </span>

              <div>
                <span>
                  <label>State</label>
                  <input type="text"/>
                </span>

                <span>
                  <label>Zip</label>
                  <input type="text"/>
                </span>
              </div>
            </form>
            <button className="MessageFormCard-checkoutButton">
                <p>Checkout</p>
            </button>
        </div>
      )
    }
}

export default MessageFormCard;
