const path = require('path');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const app = express();
app.use(express.json());

/// YOUR ROUTES GO HERE!



/////////////////////////////////////////////

// Totally insecure backend routes below, good only for rapid prototyping
// unsecured front-end applications. Should not be used in production.


// GET for getting existing item
app.get('/api/mongodb/:collectionName/', (request, response) => {
  const collectionName = request.params.collectionName;

  // Get GET params, if there are any
  const query = request.query || {};

  // Due to a requirement of MongoDB, whenever we query based on _id field, we
  // have to do it like this using ObjectId
  if (query._id) {
    query._id = ObjectId(query._id);
  }

  db.collection(collectionName)
    .find(query)
    .toArray((err, results) => {
      // Got data back.. send to client
      if (err) throw err;
      response.json(results);
    });
});

// POST for creating a new item
app.post('/api/mongodb/:collectionName/', (request, response) => {
  const collectionName = request.params.collectionName;
  const data = request.body;

  db.collection(collectionName)
    .insert(data, (err, results) => {
      // Got data back.. send to client
      if (err) throw err;

      response.json({
        'success': true,
        'results': results,
      });
    });
});


// PUT endpoint for modifying an existing item
app.put('/api/mongodb/:collectionName/', (request, response) => {
  const collectionName = request.params.collectionName;
  const data = request.body;
  const query = request.query;

  // Due to a requirement of MongoDB, whenever we query based on _id field, we
  // have to do it like this using ObjectId
  if (query._id) {
    query._id = ObjectId(query._id);
  }

  db.collection(collectionName)
    .updateOne(query, { $set: data }, (err, results) => {
      if (err) throw err;

      // If we modified exactly 1, then success, otherwise failure
      if (results.result.nModified === 1) {
        response.json({
          success: true,
        });
      } else {
        response.json({
          success: false,
        });
      }
    });
});


// D in CRUD, delete a single item with given criteria
app.delete('/api/mongodb/:collectionName/', (request, response) => {
  const collectionName = request.params.collectionName;
  const query = request.query;

  // Due to a requirement of MongoDB, whenever we query based on _id field, we
  // have to do it like this using ObjectId
  if (query._id) {
    query._id = ObjectId(query._id);
  }

  db.collection(collectionName)
    .deleteOne(query, (err, results) => {
      if (err) throw err;

      // If we deleted exactly 1, then success, otherwise failure
      if (results.result.n === 1) {
        response.json({
          success: true,
        });
      } else {
        response.json({
          success: false,
        });
      }
    })
});


// POST for saving a newly created postcard
app.post('/api/mongodb/sendapostcard/:collectionName/', (request, response) => {
  const collectionName = request.params.collectionName;
  const data = request.body;

  //Mongo DB Function to store "saved card" in a collectionName
  db.collection(collectionName)
    .insert(data, (err, results) => {
      // Got data back.. send to client
      if (err) throw err;

      response.json({
        'success': true,
        'results': results,
      });

      //get the _id from the resulting db insert and pass to a call to the lob_api
      //this should be moved to the code that will prompt user to make Stripe payment and, upon successfull payment, will cause creation of postcard using Lob API
      const card_id = results.ops[0]._id;
      // console.log('card_id ->', card_id);


    });
});



//Stripe Payment Endpoint

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.use(require("body-parser").text());

app.post("/charge/:card_id", async (req, res) => {
  try {
    let status = await stripe.charges.create({
      amount: 200,
      currency: "usd",
      description: "An example charge",
      source: req.body
    });

    //print the card_id - will use this later for function below
    let locStrings = ["#### /charge/"]
    console.log(locStrings.join(" "), ' card id: ' + req.params.card_id)


    //function to store charge id to the appropriate user's postcard
    const data = {
      stripeChargeId: status.id,
    }

    db.collection('postcards')
      .updateOne(
        { _id: ObjectId(req.params.card_id) },
        { $set: data },
        (err, results) => {
          if (err) throw err;
          if (results.result.nModified === 1) {
            locStrings.push("#### DB updateOne");
            console.log(locStrings.join(" "), 'stripeChargeId: ' + status.id);
          }
        }
      );

    // locStrings.pop();
    //function to kick off lob api request
    let postcard_id = send_postcard(req.params.card_id, locStrings, (postcard_id) => {
      locStrings.push("#### send_postcard callback");
      console.log(locStrings.join(" "), "postcard_id: ", postcard_id);
      res.json({
        postcard: postcard_id
      });
    });

  } catch (err) {
    res.status(500).end();
  }
});


// refactored function to kick off lob api request
function send_postcard(card_id, locStrings, callback) {
  const api_key = process.env.LOB_API_KEY;
  console.log('api_key is =>', api_key);

  const fs = require('fs');
  const Lob = require('lob')(api_key);

  const card_back = fs.readFileSync(`${__dirname}/lob_postcard_html/card_back.html`).toString();

  locStrings.push("#### send_postcard");
  console.log(locStrings.join(" "));
  //find database record of this postcard, note: toArray returns a promise
  db.collection('postcards')
    .find({ _id: ObjectId(card_id) })
    .toArray((err, documents) => {
      locStrings.push("#### toArray callback");
      console.log(locStrings.join(" "), "documents: ", documents);
      let card = documents[0];

      Lob.postcards.create({
        to: card.toAddress,
        front: fs.createReadStream(`${__dirname}/client/public/postcard_front_templates/${card.cardFront_image}.jpg`),
        back: card_back,
        merge_variables: {
          cardBackText: card.cardBack_text
        }
      }, (err, postcard) => {
        locStrings.push("#### lob create callback");
        console.log(locStrings.join(" "), err, postcard);
        // if (err) {
        //   console.log(err);
        // } else {
        //   locStrings.push("#### lob create callback");
        //   console.log(locStrings.join(" "), "postcard: ", postcard);
        //   save_postcard(err, postcard, card_id, locStrings);
        //   callback(lobCardID.id);
        // }
      });
    });
};

// lob has created postcard, save the lobCardID to the database
function save_postcard(err, postcard, card_id, locStrings) {
  if (err) {
    console.log(err);
  } else {
    locStrings.push("#### save_postcard");
    console.log(locStrings.join(" "));
    // console.log('The Lob API responded with this postcard object:', postcard.id, postcard.url);

    const data = {
      lobApiId: postcard.id,
      previewUrl: postcard.url,
      expectedDeliveryDate: postcard.expected_delivery_date,
      lastModifiedDate: new Date(),
      status: 'sent',
    }

    db.collection('postcards')
      .updateOne(
        { _id: ObjectId(card_id) },
        { $set: data },
        (err, results) => {
          if (err) throw err;
          if (results.result.nModified === 1) {
            locStrings.push("#### updateOne callback");
            console.log(locStrings.join(" "), "updated with lobAPIId");
            // console.log('update postcard after successful send to Lob for card_id ->', ObjectId(card_id));
          }
        }
      );
  }
}

//get LobApiId using a card_id
app.get('/getLobApiId/:card_id', (req, res) => {
  console.log('card id:', req.params.card_id)
  db.collection('postcards')
    .find({ _id: ObjectId(req.params.card_id) })
    .toArray((err, card_DB_Obj) => {
      if (err) throw err;
      console.log('Lob Api Id:', card_DB_Obj[0].lobApiId);
      res.json({
        lobApiId: card_DB_Obj[0].lobApiId,
      })
    });


});


//thank you page route
app.get('/thank-you/:lobApiId', (request, response) => {
  console.log('thank you route working');
  console.log(request.params.lobApiId);

  //get expected delivery date from Lob Api
  const api_key = process.env.LOB_API_KEY;
  const Lob = require('lob')(api_key);
  Lob.postcards.retrieve(request.params.lobApiId, function (err, res) {
    console.log(err, res);
    console.log('lob working')
    response.json({
      deliveryDate: res.expected_delivery_date,
      lobApiId: request.params.lobApiId,
    })
  });

});




/////////////////////////////////////////////
// Boilerplate, no need to touch what's below

/////////////////////////////////////////////
// Logger & configuration
function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}
app.use(logger);
/////////////////////////////////////////////


// For production, handle any requests that don't match the ones above
app.use(express.static(path.join(__dirname, 'client/build')));

// Wild-card, so handle everything else
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});


// Set up configuration variables
if (!process.env.MONGODB_URI) {
  console.log('- Error - Must specify the following env variables:');
  console.log("MONGODB_URI='mongodb://someUser:somePW@site.com:1234/someDB'");
  console.log('- (See README.md)');
  process.exit(1);
}
const MONGODB_URL = process.env.MONGODB_URI;
const splitUrl = MONGODB_URL.split('/');
const mongoDbDatabaseName = splitUrl[splitUrl.length - 1];

let db;
// First connect to MongoDB, then start HTTP server
MongoClient.connect(MONGODB_URL, { useNewUrlParser: true }, (err, client) => {
  if (err) throw err;
  console.log("--MongoDB connection successful");
  db = client.db(mongoDbDatabaseName);

  // Start the server
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`
      *********************************************
      * Insecure prototyping backend is running!  *
      * Only use for prototyping                  *
      * Backend server up at ${PORT}              *
      *********************************************
    `);
  })
});

