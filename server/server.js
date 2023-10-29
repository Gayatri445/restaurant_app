const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Define a function to calculate the total amount based on cart items
function calculateTotalAmount(cartItems) {
  let totalAmount = 0;
  cartItems.forEach((cartItem) => {
    totalAmount += cartItem.price * cartItem.quantity;
  });
  return totalAmount + 70;
}

// Create a payment intent route
app.post("/api/create-payment-intent", async (req, res) => {
  try {
    console.log("Request body:", req.body);
    const { cartItems } = req.body;

    // Calculate the total amount based on cart items
    const totalAmount = calculateTotalAmount(cartItems);
    // Create a Stripe session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "Cart Items",
            },
            unit_amount: Math.round(totalAmount * 100), // Amount in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:5173/",
      cancel_url: "http://localhost:5173/cart",
      billing_address_collection: "required",
    });

    // Send the session ID back to the client
    res.json({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the payment intent." });
  }
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
