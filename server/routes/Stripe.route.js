const express = require("express");
require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const StripeRouter = express.Router();

StripeRouter.post("/", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      shipping_address_collection: {
        allowed_countries: ["IN"],
      },
      line_items: req.body.map((item) => {
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: item.title,
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.CLIENT_URL}/payment/success`,
      cancel_url: `${process.env.CLIENT_URL}/payment/failure`,
    });
    res.send({ url: session.url });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

module.exports = {
  StripeRouter,
};
