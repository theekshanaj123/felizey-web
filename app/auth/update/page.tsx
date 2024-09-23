"use client"; // Add this to mark it as a client component

import React, { useState } from "react";
import { supabase } from "@/supabaseClient";
import { useRouter } from "next/navigation"; // Updated import

export default function UpdatePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter(); // Update to the new hook

  // Password validation function
  const validatePassword = (password: string) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
      return "Password must be at least 8 characters long";
    } else if (!hasUpperCase) {
      return "Password must contain at least one uppercase letter";
    } else if (!hasLowerCase) {
      return "Password must contain at least one lowercase letter";
    } else if (!hasNumber) {
      return "Password must contain at least one number";
    } else if (!hasSpecialChar) {
      return "Password must contain at least one special character";
    }
    return null;
  };

  const handlePasswordUpdate = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Validate the password
    const validationError = validatePassword(newPassword);
    if (validationError) {
      setMessage(validationError);
      return;
    }

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      setMessage("Error updating password");
    } else {
      setMessage("Password updated successfully!");
      // router.push("/"); // Use router.push from next/navigation
      window.location.href = "exp://192.168.8.100:8081/login";
    }
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Update Password
      </h2>
      <form
        onSubmit={handlePasswordUpdate}
        className="w-full max-w-md space-y-4"
      >
        {/* New Password Input */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className="w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 px-4 text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {/* Confirm Password Input */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className="w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-800 transition-colors"
        >
          Update Password
        </button>
      </form>

      {message && (
        <p
          className={`mt-4 ${
            message.includes("successfully") ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
