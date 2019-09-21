import React, { Component } from 'react';
import './MessageFormCard.css';

const arrowSVG = <svg focusable="false" data-icon="angle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>;

class MessageFormCard extends Component {
    state = {
    }

    render() {
      return (
        <div className="MessageFormCard">
            <div className="MessageFormCard-writeButton" onClick={() => this.props.flipPostCard()}>
              {arrowSVG}
              <p className="MessageFormCard-write">Type your message</p>
            </div>
            <form className="MessageFormCard-form">
              <span>
                <h4>Message</h4>
                <textarea 
                  name="message"
                  onClick={this.props.forceFlipToBack}
                  onChange={this.props.handleMessageChange}
                />
              </span>

              <span>
                <h4>Recipient Address</h4>
                <small>We can only send your postcard to an address within the US.</small>
              </span>

              <span>
                <label>Name</label>
                <input 
                  name="recName"
                  type="text"
                  onChange={this.props.handleFormChange}
                />
              </span>

              <span>
                <label>Address 1</label>
                <input 
                  name="recAddress1"
                  type="text"
                  onChange={this.props.handleFormChange}
                />
              </span>

              <span>
                <label>Address 2</label>
                <input 
                  name="recAddress2"
                  type="text"
                  onChange={this.props.handleFormChange}
                />
              </span>

              <span>
                <label>City</label>
                <input 
                  name="recCity"
                  type="text"
                  onChange={this.props.handleFormChange}
                />
              </span>

              <div>
                <span>
                  <label>State</label>
                  <input 
                    name="recState"
                    type="text"
                    onChange={this.props.handleFormChange}
                  />
                </span>

                <span>
                  <label>Zip</label>
                  <input 
                    name="recZip"
                    type="text"
                    onChange={this.props.handleFormChange}
                  />
                </span>
              </div>
            </form>
            <button className="MessageFormCard-checkoutButton">
              Checkout
            </button>
        </div>
      )
    }
}

export default MessageFormCard;
