"use client"; // Add this line

import React, { useState } from "react";
import { supabase } from "@/supabaseClient";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordReset = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "https://www.felizey.com/auth/update", // Ensure this URL is reachable
      // redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/update`,
    });

    if (error) {
      setMessage(error.message); // Display Supabase's error message
    } else {
      setMessage("Password reset email sent!");
    }
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Reset Password
      </h2>
      <form
        onSubmit={handlePasswordReset}
        className="w-full max-w-md space-y-4"
      >
        <input
          type="email"
          className="w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-800 transition-colors"
        >
          Send Password Reset Link
        </button>
      </form>
      {message && <p className="text-green-500 mt-4">{message}</p>}
    </div>
  );
}
