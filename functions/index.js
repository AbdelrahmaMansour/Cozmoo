const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51KHtKsBjkNffp2XPSKZGVtxkfS2jdiSCMR3WATrrYn5xyHT3Vu3y6B6BU12K22KXoZOg6B2KaGDsQ2itlO3OMMPY00f4JhesVo"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

// http://localhost:5001/cozmoo-8f7bd/us-central1/api

app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.api = functions.https.onRequest(app);
