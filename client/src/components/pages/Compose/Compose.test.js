import React from 'react';
import Compose from './Compose.js';
// import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

function render(reactComponent) {
    const div = document.createElement('div');
    const renderedReactComponent = ReactDOM.render(reactComponent, div);
    return ReactDOM.findDOMNode(renderedReactComponent);
}

test('renders successfully', () => {
    const component = render(<Compose/>);

    expect(component).toBeTruthy();
})

// test('foo', () => {
//     const component = render(<Compose/>);
    
//     const state = {
//         formData: {
//             message: 'Dolor sit amet, consectetur adipiscing elit.',
//             recName: 'Somename Somebody',
//             recAddress1: "123 Sesame Street",
//             recAddress2: "Apartment 3",
//             recCity: "New York", 
//             recState: "NY",
//             recZip: "00000",
//         },
//         showCheckout: false,
//         card_id: null,
//         cardFront_image: "arthur_fist",
//     };
//     component.setState(state);
//     // component.find('')
//     // const $ = require('jquery');
//     expect(component).toBeTruthy();
// })