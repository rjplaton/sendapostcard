import React, { Component } from 'react';
import './Compose.css';
import Postcard from '../../Postcard/Postcard.js';
import FormCard from '../../FormCard/FormCard.js';
import {templateIDs} from '../../homepage/TemplateID.js';
import * as Yup from 'yup';

class Compose extends Component {
    state = {
        templateID: null,
        templateName: "",
        title: '',
        text: '',
        showBack: false,
        formData: {
            message: "",
            messageHTML: "",
            recName: "",
            recAddress1: "",
            recAddress2: "",
            recCity: "", 
            recState: "",
            recZip: "",
        },
        message_len: 0,
        formErrors: {
            message: "",
            recName: "",
            recAddress1: "",
            recAddress2: "",
            recCity: "", 
            recState: "",
            recZip: "",
        },
        formTouched: {
            message: false,
            recName: false,
            recAddress1: false,
            recAddress2: false,
            recCity: false, 
            recState: false,
            recZip: false,
        },
        showCheckout: false,
        card_id: null,
//        cardFront_image: "arthur_fist",
    }

    componentDidMount() {
        const template = templateIDs[this.props.match.params.templateId];
        const template_name = template.file_name;
        this.setState({
            templateID: template,
            templateName: template_name,
         });
     }

    checkout = (ev) => {
        ev.preventDefault();
        console.log("show checkout form");

        console.log("MessageHTML: ", this.state.formData.messageHTML);
        console.log("Message: ", this.state.formData.message);


        const formData = {
            toAddress: {
              name: this.state.formData.recName,
              address_line1: this.state.formData.recAddress1,
              address_line2: this.state.formData.recAddress2 === null ? "" : this.state.formData.recAddress2,
              address_city: this.state.formData.recCity,
              address_state: this.state.formData.recState,
              address_zip: this.state.formData.recZip,
              address_country: "US"
            },
            cardBack_text: this.state.formData.message.split("\n").map((line, index) => (
                ["<span>", line, "<br /></span>"].join("")
            )).join(""),
            cardFront_image: this.state.templateName,
            status: "saved",
            stripeChargeId: null,
            lobApiId: null,
            createDate: new Date(),
            lastModifiedDate: new Date(), //TODO: modify date when editing
          };

        fetch('/api/mongodb/sendapostcard', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Got this back', data);
            console.log('Got this id back', data.results.insertedIds[0])

            this.setState({
                card_id: data.results.insertedIds[0],
                showCheckout: true,
            })
        })
    }

    showMessageForm = () => {
        console.log("show message form", this.state.card_id);
        this.setState({showCheckout: false});
    }

    flipPostCard = () => {
        let current = this.state.showBack;
        this.setState({ showBack: !current });
        return !current;
    }

    forceFlipToBack = () => {
        this.setState({ showBack: true });
    }

    handleBlur = (e) => {
        const AddressSchema = Yup.object().shape({
            message: Yup.string()
                .min(1, 'Please provide a message')
                .max(401, 'Message must be under 400 characters.')
                .required('Required'),
            recName: Yup.string()
                .matches(/^[a-zA-Z\s]*$/, 'Please enter a valid name.')
                .max(30, 'Name must be less than 30 characters.')
                .required('Required'),
            recAddress1: Yup.string()
                .matches(/^\d+(\s[A-z]+)+/, 'Please enter a valid address')
                .max(30, 'Address must be less than 30 characters.')
                .required('Required'),
            recAddress2: Yup.string()
                .max(30, 'Address must be less than 30 characters.'),
            recCity: Yup.string()
                .matches(/^[a-zA-Z\s]*$/, 'Please enter a valid city.')
                .max(30, 'City must be less than 30 characters')
                .required('Required'),
            recState: Yup.string()
                .min(2, '2 digit code')
                .max(2, '2 digit code')
                .required('Required'),
            recZip: Yup.string()
                .matches(/^[0-9]{5}(?:-[0-9]{4})?$/, 'Please enter a valid zip')
                .required('Required'),
        })

        let name = e.nativeEvent.target.name
        let formErrors = {}
        AddressSchema.validate(this.state.formData, {abortEarly: false}).catch(function(err) {
            err.inner.forEach((error) => {
                formErrors[error.path] = error.message;
            })
        }).then(() => {
            let formTouched = this.state.formTouched;
            if (!formTouched[name]) {
                let formTouched = this.state.formTouched;
                formTouched[name] = true;
                this.setState({formTouched: formTouched});
            }

            this.setState({formErrors: formErrors, formTouched: formTouched});
        })
    }

    handleMessageChange = (event) => {
        const message_limit = 400;
        let formData = this.state.formData;
        formData.message = event.target.value;
        // console.log(formData.message.length, message_limit);

        if (formData.message.length < message_limit) {
            formData.messageHTML = event.target.value.split("\n").map((line, index) => (
                <span key={index}>{line}<br /></span>
            ));
            this.setState({formData: formData});
        }
        else {
            console.log("Message is too long");
        }
    }

    handleFormChange = (event) => {
        let formData = this.state.formData;
        
        const target = event.target;
        const value = target.value;
        const name = target.name;

        formData[name] = value;

        this.setState({formData: formData});
    }

    render() {
        return (
            <div className="Compose">
                {/* <nav className="Compose-navigation">
                    <h1 className="Compose-title">Send a postcard</h1>
                </nav> */}

                <div className="Compose-cardArea">
                    <Postcard
                        fileName={this.state.templateName}
                        formData={this.state.formData}
                        flipPostCard={this.flipPostCard} 
                        showBackClass={this.state.showBack? "Postcard-showBack": ""}
                    />
                </div>

                <div className="Compose-controlArea">
                    <FormCard 
                        formData={this.state.formData}
                        flipPostCard={this.flipPostCard}
                        forceFlipToBack={this.forceFlipToBack}
                        handleMessageChange={this.handleMessageChange}
                        handleFormChange={this.handleFormChange}
                        showCheckout={this.state.showCheckout}
                        checkout={this.checkout}
                        showMessageForm={this.showMessageForm}
                        card_id={this.state.card_id}
                        formErrors={this.state.formErrors}
                        formTouched={this.state.formTouched}
                        handleBlur={this.handleBlur}
                    />
                </div>
            </div>
        )
    }
}

export default Compose;
