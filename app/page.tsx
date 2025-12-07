"use client";
import React, { useState } from "react";
import RealTimeQuotes from "./RealTimeQuotes";
import { motion } from "framer-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <h1 className="text-xl sm:text-2xl font-bold text-pink-600">Cancer Awareness</h1>
              <p className="hidden sm:block text-sm text-gray-500">Support • Prevent • Educate</p>
            </div>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-6 font-medium text-gray-700">
              <li className="hover:text-pink-600 cursor-pointer">Home</li>
              <li className="hover:text-pink-600 cursor-pointer">About</li>
              <li className="hover:text-pink-600 cursor-pointer">Contact</li>
            </ul>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                aria-label="Toggle menu"
                onClick={() => setMenuOpen((s) => !s)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile links */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-4 py-3 space-y-2">
              <div className="block w-full text-left px-2 py-2 rounded-md hover:bg-gray-50">Home</div>
              <div className="block w-full text-left px-2 py-2 rounded-md hover:bg-gray-50">About</div>
              <div className="block w-full text-left px-2 py-2 rounded-md hover:bg-gray-50">Contact</div>
            </div>
          </div>
        )}
      </nav>

      {/* Banner Section */}
      <header className="relative w-full h-[45vh] md:h-[55vh] lg:h-[60vh] overflow-hidden">
        <img
          src="/image4.png"
          alt="Hands joined for cancer awareness"
          className="w-full h-full object-cover object-center sm:object-top md:object-center"
        />

        {/* Text Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-lg">Together, we are stronger than cancer</h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/90">Learn prevention. Support survivors. Commit to screenings.</p>
          <div className="mt-6">
            <button className="bg-white/90 text-pink-600 font-semibold px-4 py-2 rounded-md shadow-sm hover:scale-[1.02] transition">Learn More</button>
          </div>
        </motion.div>
      </header>

      <main className="flex-1 w-full">
        {/* Awareness Message */}
        <section className="max-w-3xl mx-auto text-center mt-8 px-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-base sm:text-lg text-gray-700 leading-relaxed"
          >
            Cancer touches us all. But together, we are stronger than this disease. Take action today: learn the facts about prevention and early detection, support those fighting, and commit to regular screenings. Your awareness is their best defense.
          </motion.p>
        </section>

        {/* Secondary info area (responsive two-column on md+) */}
        <section className="max-w-6xl mx-auto mt-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-pink-600 mb-3">Prevention</h3>
            <p className="text-gray-600">Small changes in lifestyle and regular checkups can dramatically reduce risk. Talk to healthcare professionals for personalised guidance.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-pink-600 mb-3">Support</h3>
            <p className="text-gray-600">If you or someone you love is affected, reach out to local support groups and resources — nobody should go through it alone.</p>
          </div>
        </section>

        {/* Real-Time Quotes Section */}
        <section className="max-w-6xl mx-auto mt-10 px-4">
          <RealTimeQuotes />
        </section>

        {/* Contact Form */}
        <section className="max-w-3xl mx-auto mt-12 px-4 mb-12">
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-center text-pink-600 mb-6"
          >
            Contact Us
          </motion.h3>

          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-lg p-6 rounded-xl flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="p-3 border rounded-lg w-full"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 border rounded-lg w-full"
                required
              />
            </div>

            <textarea
              placeholder="Message"
              rows={5}
              className="p-3 border rounded-lg w-full"
            ></textarea>

            <div className="flex justify-end">
              <button className="bg-pink-600 text-white py-3 px-6 rounded-lg hover:bg-pink-700 transition">Send Message</button>
            </div>
          </motion.form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto text-center space-y-2 px-4">
          <p className="text-lg font-semibold">Cancer Awareness & Support</p>
          <p className="text-sm text-gray-300">Together, we can spread awareness and provide hope.</p>
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
