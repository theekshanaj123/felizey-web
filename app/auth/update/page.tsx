// app/auth/update/page.tsx

"use client"; // Add this to mark it as a client component

import React, { useState } from "react";
import { supabase } from "@/supabaseClient";
import { useRouter } from "next/navigation"; // Updated import

export default function UpdatePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter(); // Update to the new hook

  const handlePasswordUpdate = async () => {
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      setMessage("Error updating password");
    } else {
      setMessage("Password updated successfully!");
      router.push("/"); // Use router.push from next/navigation
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
        <input
          type="password"
          className="w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-800 transition-colors"
        >
          Update Password
        </button>
      </form>
      {message && <p className="text-green-500 mt-4">{message}</p>}
    </div>
  );
}
