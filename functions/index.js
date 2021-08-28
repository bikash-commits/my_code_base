const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const {response} = require("express");
const stripe = require("stripe")
('sk_test_51JQnQ8SEXq8mBNwtKk7gysv7jGyheZrdLkMGCDp52iDI31JcIDBnpE5rAJQAaOZntm3tkA7OtPEX8Wbt4AXpprWi00MmWscLFK')

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("hello"));

app.post('/payments/create', async (req, res) => {
  const total = req.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
