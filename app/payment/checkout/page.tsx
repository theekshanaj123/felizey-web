"use client";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "@/components/CheckoutPage";
import convertToSubcurrency from "@/lib/convertToSubcurrency";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function page({
  searchParams: { amount },
}: {
  searchParams: { amount: number };
}) {
  console.log("parm", amount);
  // const amount = 29.99;
  return (
    <main className="h-screen w-full  justify-center items-center text-center rounded-lg bg-[#fff] p-10">
      <div className="mb-10">
        <h2 className="text-2xl text-black font-bold">
          Your Balance
          <span className="font-bold"> ${amount}</span>
        </h2>
      </div>
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount),
          currency: "usd",
          appearance: {
            theme: "flat",
          },
        }}
      >
        <CheckoutPage amount={amount} />
      </Elements>
    </main>
  );
}
