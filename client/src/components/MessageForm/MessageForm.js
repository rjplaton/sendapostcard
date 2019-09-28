import React, { Component } from 'react';
import './MessageForm.css';

class MessageForm extends Component {

    render() {
      return (
        <div className="MessageForm">
            <form noValidate>
                <div className="MessageForm-flex">
                    <span>
                        <h4>Message</h4>
                        <textarea 
                        name="message"
                        onClick={this.props.forceFlipToBack}
                        onChange={this.props.handleMessageChange}
                        value={this.props.formData.message || ""}
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
                        value={this.props.formData.recName || ""}
                        />
                    </span>

                    <span>
                        <label>Address 1</label>
                        <input 
                        name="recAddress1"
                        type="text"
                        onChange={this.props.handleFormChange}
                        value={this.props.formData.recAddress1 || ""}
                        />
                    </span>

                    <span>
                        <label>Address 2</label>
                        <input 
                        name="recAddress2"
                        type="text"
                        onChange={this.props.handleFormChange}
                        value={this.props.formData.recAddress2 || ""}
                        />
                    </span>

                    <span>
                        <label>City</label>
                        <input 
                        name="recCity"
                        type="text"
                        onChange={this.props.handleFormChange}
                        value={this.props.formData.recCity || ""}
                        />
                    </span>

                    <div className="MessageForm-stateZipRow">
                        <span>
                        <label>State</label>
                        <input 
                            name="recState"
                            type="text"
                            onChange={this.props.handleFormChange}
                            value={this.props.formData.recState || ""}
                        />
                        </span>

                        <span>
                        <label>Zip</label>
                        <input 
                            name="recZip"
                            type="text"
                            onChange={this.props.handleFormChange}
                            value={this.props.formData.recZip || ""}
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
