const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HwmsJKFbsE0XfWS1z5czwz0zVd5A94wpIFpjtx5kgZch2Lpbwae6nCq7Xw3Az83q6mB3jeZgPg2hWmQoVFpkqfj006EecH498');


const app = express();

app.use(cors({origin:true}));
app.use(express.json());

app.get('/',(request,response) => response.status(200).send('hello World!!!'))

app.post('/payments/create', async(request,response) => {
    const total = request.query.total;
    console.log('Payment Recieved of' , total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency: 'usd',
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app);
