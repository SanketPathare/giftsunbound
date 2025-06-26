"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 border-b-4 border-pink-600 pb-10">
        {/* Left Text Section */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-900">
            Subscribe to our newsletter for the latest deals, offers, updates
            and many more.
          </h2>
        </div>

        {/* Right Form Section */}
        <div className="flex flex-col items-start md:items-end">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Join our newsletter
          </h3>
          <form className="flex w-full md:w-auto rounded-full shadow-sm overflow-hidden border border-pink-600">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-6 py-3 w-full md:w-80 text-gray-800 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
