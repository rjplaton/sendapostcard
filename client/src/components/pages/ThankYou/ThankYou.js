import React, { Component } from 'react';
import './ThankYou.css';


class ThankYou extends Component {
  state = {
    orderNumber: 123,
    deliveryDate: '01/01/2020',
  }

  componentDidMount() {
    this.fetchDeliveryDate();
  }

  fetchDeliveryDate() {
    console.log('Fetching data from Lob API');
    const { lobApiId } = this.props.match.params;
    fetch('/thank-you/' + lobApiId)
      .then(response => response.json())
      .then(data => {
        console.log('Got data back', data);
        this.setState({
          deliveryDate: data.deliveryDate,
          orderNumber: lobApiId,
        });
        console.log(this.state.orderNumber)
      });
  }


  render() {
    return (
      <div className="ThankYou">
        <h1>Thank You</h1>
        <p>Your order has been <strong>successfully</strong> placed. </p>
        <p>The postcard will be processed immediately.</p>
        <br />
        <p>Estimated delivery date: <strong>{this.state.deliveryDate}</strong></p>
        <p>Order Number: <strong>{this.state.orderNumber}</strong></p>
      </div>
    );
  }
}

export default ThankYou;