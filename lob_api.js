
exports.create_postcard = (id) => {
  const fs = require('fs');
  const ObjectId = require('mongodb').ObjectId;

  const api_key = process.env.LOB_API_KEY;
  console.log('api_key is =>', api_key);

  const Lob = require('lob')(api_key);

  const card_front = fs.readFileSync(`${__dirname}/lob_postcard_html/sample_card_front.html`).toString();
  const card_back = fs.readFileSync(`${__dirname}/lob_postcard_html/sample_card_back.html`).toString();

  // Create the address
  const mailing_address = {
    name: 'Robin Joseph',
    email: 'test@gmail.com',
    phone: '123456789',
    address_line1: '123 Test Street',
    address_line2: 'Unit 199',
    address_city: 'Chicago',
    address_state: 'IL',
    address_zip: '60012',
    address_country: 'US'
  };


  // Create Postcard
  Lob.postcards.create({
    description: 'Sample Postcard :(',
    to: mailing_address,
    front: card_front,
    back: card_back,
    merge_variables: {
      insulting_name: 'Jackass'
    }
  }, (err, postcard) => {
    if (err) {
      console.log(err);
    } else {
      console.log('The Lob API responded with this postcard object:', postcard);
    }
  });
}


