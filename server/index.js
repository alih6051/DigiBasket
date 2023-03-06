const express = require("express");
const { connection } = require("./configs/db");
const { UserRouter } = require("./routes/User.route");
const { ProductRouter } = require("./routes/Product.route");
const { AdminRouter } = require("./routes/Admin.route");
const { StripeRouter } = require("./routes/Stripe.route");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// HOME
app.get("/", (req, res) => {
  res.send("DIGI BASKET BACKEND");
});

// ROUTES
app.use("/api/users", UserRouter);
app.use("/api/products", ProductRouter);
app.use("/api/admin", AdminRouter);
app.use("/api/stripe-create-checkout", StripeRouter);

app.listen(4500, async () => {
  try {
    await connection;
    console.log("CONNECTED TO DB");
  } catch (error) {
    console.log(error);
  }
  console.log("RUNNING AT PORT 4500");
});
