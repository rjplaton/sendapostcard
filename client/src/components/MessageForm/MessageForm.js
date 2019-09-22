import React, { Component } from 'react';
import './MessageForm.css';

class MessageForm extends Component {

    render() {
      return (
        <div className="MessageForm">
            <form>
                <div className="MessageForm-flex">
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

                    <div className="MessageForm-stateZipRow">
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
                </div>
            </form>
            <div className="MessageForm-checkoutButtonArea">
                <button onClick={this.props.checkout}>
                    Checkout
                </button>
            </div>
        </div>
      )
    }
}

export default MessageForm;
