"use client";

import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const usernameTrim = username.trim();
    const emailTrim = email.trim();
    const passwordVal = password;

    if (!usernameTrim || !emailTrim || !passwordVal) {
      setError("Please provide username, email and password.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('/api/auth/register', {
        username: usernameTrim,
        email: emailTrim,
        password: passwordVal,
      });

      if (response.status === 201) {
        // Registration successful, redirect to login or home page
        window.location.href = '/login';
      } else {
        setError(response.data.error || 'Registration failed. Please try again.');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center p-4 bg-secondary font-sans">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-2xl rounded-xl">
        <h1 className="text-3xl font-extrabold text-center text-gray-900">
          Register
        </h1>
        {error && (
          <div className="p-3 text-sm font-medium text-red-700 bg-red-100 border border-red-300 rounded-lg">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-violet-500 focus:border-violet-500 transition duration-150"
              placeholder="Choose a username"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-violet-500 focus:border-violet-500 transition duration-150"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-violet-500 focus:border-violet-500 transition duration-150"
              placeholder="Create a password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition duration-150 disabled:bg-violet-400 disabled:cursor-not-allowed"
          >
            {loading ? (
              <svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
}
