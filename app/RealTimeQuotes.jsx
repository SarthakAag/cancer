"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const quotes = [
  "Cancer may take away my physical abilities but it cannot touch my mind, heart, and soul.",
  "You beat cancer by how you live, why you live, and in the manner in which you live.",
  "Strength grows in moments when you think you can’t go on but you keep going anyway.",
  "Hope is stronger than fear. Keep fighting.",
  "Every day may not be good, but there is something good in every day."
];

export default function RealTimeQuotes() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-20 mb-20 px-6">
      <h3 className="text-3xl font-bold text-center text-purple-600 mb-8">
        Real-Time Public Quotes
      </h3>

      <div className="flex justify-center w-full">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-xl p-6 rounded-2xl text-lg max-w-2xl text-center text-gray-700"
        >
          “{quotes[index]}”
        </motion.div>
      </div>
    </section>
  );
}
