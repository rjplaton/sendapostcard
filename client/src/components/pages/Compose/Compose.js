import React, { Component } from 'react';
import './Compose.css';
import Postcard from '../../Postcard/Postcard.js';
import FormCard from '../../FormCard/FormCard.js';
import {templateIDs} from '../../homepage/TemplateID.js';

class Compose extends Component {
    state = {
        templateID: null,
        templateName: "",
        title: '',
        text: '',
        showBack: false,
        formData: {
            message: null,
            messageHTML: null,
            recName: null,
            recAddress1: null,
            recAddress2: null,
            recCity: null, 
            recState: null,
            recZip: null,
        },
        showCheckout: false,
        card_id: null,
        cardFront_image: "arthur_fist",
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
            cardFront_image: this.state.cardFront_image,
            status: "saved",
            stripeChargeId: null,
            lobApiId: null,
            createDate: new Date(),
            lastModifiedDate: new Date(), //TODO: modify date when editing
          };

        fetch('/api/mongodb/sendapostcard/postcards', {
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

    handleMessageChange = (event) => {
        let formData = this.state.formData;
        formData.message = event.target.value;
        formData.messageHTML = event.target.value.split("\n").map((line, index) => (
            <span key={index}>{line}<br /></span>
        ));
        this.setState({formData: formData});
        // console.log("handlemessagechange");
    }

    handleFormChange = (event) => {
        let formData = this.state.formData;
        
        const target = event.target;
        const value = target.value;
        const name = target.name;

        formData[name] = value;

        this.setState({formData: formData});
        
        // console.log(this.state.formData);
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
                    />
                </div>
            </div>
        )
    }
}

export default Compose;
