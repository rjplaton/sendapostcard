import React, { Component } from 'react';
import './MessageForm.css';

class MessageForm extends Component {
    render() {
        let formErrors = this.props.formErrors;
        let formTouched = this.props.formTouched;
        
        let validForm = Object.keys(formErrors).length === 0;

        return (
            <div className="MessageForm">
                <form>
                    <div className="MessageForm-flex">
                        <span>
                            {((formErrors.message !== "") && formTouched.message) ? (
                                <div className="hasError"><h4>Message</h4> <small>{formErrors.message}</small></div>
                            ) :
                                (<h4>Message</h4>)
                            }
                            <textarea
                                name="message"
                                onClick={this.props.forceFlipToBack}
                                onChange={this.props.handleMessageChange}
                                value={this.props.formData.message || ""}
                                onBlur={this.props.handleBlur}
                            />
                        </span>

                        <span>
                            <h4>Recipient Address</h4>
                            <small>We can only send your postcard to an address within the US.</small>
                        </span>

                        <span>
                            {formErrors.recName && formTouched.recName ? (
                                <div className="hasError"><label>Name</label> <small>{formErrors.recName}</small></div>
                            ) :
                                (<label>Name</label>)
                            }
                            <input
                                name="recName"
                                type="text"
                                onChange={this.props.handleFormChange}
                                value={this.props.formData.recName || ""}
                                onBlur={this.props.handleBlur}
                            />
                        </span>

                        <span>
                            {formErrors.recAddress1 && formTouched.recAddress1 ? (
                                <div className="hasError"><label>Address 1</label> <small>{formErrors.recAddress1}</small></div>
                            ) :
                                (<label>Address 1</label>)
                            }
                            <input
                                name="recAddress1"
                                type="text"
                                onChange={this.props.handleFormChange}
                                value={this.props.formData.recAddress1 || ""}
                                onBlur={this.props.handleBlur}
                            />
                        </span>

                        <span>
                            {formErrors.recAddress2 && formTouched.recAddress2 ? (
                                <div className="hasError"><label>Address 2</label> <small>{formErrors.recAddress2}</small></div>
                            ) :
                                (<label>Address 2</label>)
                            }
                            <input
                                name="recAddress2"
                                type="text"
                                onChange={this.props.handleFormChange}
                                value={this.props.formData.recAddress2 || ""}
                                onBlur={this.props.handleBlur}
                            />
                        </span>

                        <span>
                            {formErrors.recCity && formTouched.recCity ? (
                                <div className="hasError"><label>City</label> <small>{formErrors.recCity}</small></div>
                            ) :
                                (<label>City</label>)
                            }
                            <input
                                name="recCity"
                                type="text"
                                onChange={this.props.handleFormChange}
                                value={this.props.formData.recCity || ""}
                                onBlur={this.props.handleBlur}
                            />
                        </span>

                        <div className="MessageForm-stateZipRow">
                            <span>
                                {formErrors.recState && formTouched.recState ? (
                                    <div className="hasError"><label>State</label> <small>{formErrors.recState}</small></div>
                                ) :
                                    (<label>State</label>)
                                }
                                <input
                                    name="recState"
                                    type="text"
                                    onChange={this.props.handleFormChange}
                                    value={this.props.formData.recState || ""}
                                    onBlur={this.props.handleBlur}
                                />

                            </span>

                            <span>
                                {formErrors.recZip && formTouched.recZip ? (
                                    <div className="hasError"><label>Zip</label> <small>{formErrors.recZip}</small></div>
                                ) :
                                    (<label>recZip</label>)
                                }
                                <input
                                    name="recZip"
                                    type="text"
                                    onChange={this.props.handleFormChange}
                                    value={this.props.formData.recZip || ""}
                                    onBlur={this.props.handleBlur}
                                />
                            </span>
                        </div>
                    </div>
                </form>
                <div className="MessageForm-checkoutButtonArea">
                    <button 
                        onClick={this.props.checkout} 
                        id={validForm ? "MessageForm-valid" : ""}
                        disabled={!validForm}
                    >
                        Checkout
                    </button>
                </div>
            </div>
        )
    }
}

export default MessageForm;
