"use client";

import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

function CheckoutForm() {

  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {

    event.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);
    setErrorMessage("");

    try {

      // Validate payment element
      const { error: submitError } = await elements.submit();

      if (submitError) {
        setErrorMessage(submitError.message || "Payment validation failed");
        setLoading(false);
        return;
      }

      // Create payment intent
      const res = await fetch("/api/create-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 50, // replace with dynamic amount
        }),
      });

      const data = await res.json();

      const clientSecret = data.clientSecret;

      if (!clientSecret) {
        setErrorMessage("Failed to initialize payment");
        setLoading(false);
        return;
      }

      // Confirm payment
      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: "http://localhost:3000/success",
        },
      });

      if (error) {
        setErrorMessage(error.message || "Payment failed");
      }

    } catch (err) {
      setErrorMessage("Something went wrong");
    }

    setLoading(false);
  };

  return (
        <div className="flex flex-col justify-center items-center w-full mt-6">
    <form onSubmit={handleSubmit}>

      <PaymentElement />

      {errorMessage && (
        <div className="text-red-500 mt-2">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || !elements || loading}
        className="bg-purple-600 text-white p-2 rounded-md mt-4 w-full disabled:bg-gray-300"
      >
        {loading ? "Processing..." : "Pay"}
      </button>

    </form>
        </div>
  );
}

export default CheckoutForm;
