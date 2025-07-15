"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const dummyVideos = [
  {
    youtubeId: "4AwyVTHEU3s",
    title: "Aftercare for Knee Surgery: Showering Safely",
    doctor: "By Dr. Megan Roberts – Orthopedic Surgeon",
    duration: "02:01:09",
  },
  {
    youtubeId: "d7sUWwHugg8",
    title: "Aftercare for Knee Surgery: Showering Safely",
    doctor: "By Dr. Megan Roberts – Orthopedic Surgeon",
    duration: "02:01:09",
  },
  {
    youtubeId: "Rl5Y9Eem3tc",
    title: "Aftercare for Knee Surgery: Showering Safely",
    doctor: "By Dr. Megan Roberts – Orthopedic Surgeon",
    duration: "02:01:09",
  },
  {
    youtubeId: "_NP5iQ0p2Eg",
    title: "Aftercare for Knee Surgery: Showering Safely",
    doctor: "By Dr. Megan Roberts – Orthopedic Surgeon",
    duration: "02:01:09",
  },
];

function HeroSection() {
  const ref = useRef(null);

  const bottomAnimation = {
    initial: { y: "20%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.8 },
  };

  return (
    <section className=" rounded-2xl p-4">
      <div className="bg-black rounded-2xl p-6 border border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* LEFT: Title + Input */}
            <div className="flex-1 flex flex-col justify-center text-left max-w-3xl self-center">
              <motion.div
                {...bottomAnimation}
                className="relative flex flex-col text-left items-center gap-4"
              >
                <h1 className="text-white text-7xl font-medium w-full">
                  Ask
                  <span className="instrument-font italic font-normal dark:text-white/70">
                    {" "}
                    Sophia ,{" "}
                  </span>
                  your clinic’s trusted assistant.
                </h1>
              </motion.div>

              <motion.div
                {...bottomAnimation}
                className="flex flex-col items-left justify-center gap-4 mt-10"
              >
                <div className="flex items-center w-full max-w-2xl px-4 py-2 bg-[#333] rounded-full">
                  <input
                    type="text"
                    placeholder="Ask anything"
                    className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none px-3"
                  />
                  <button className="w-9 h-9 flex items-center justify-center bg-black rounded-full hover:scale-105 transition">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4 12L2 21L21 12L2 3L4 12Z" />
                    </svg>
                  </button>
                </div>

                <p className="text-white/60 max-w-38 text-dark_black/60 dark:text-white/60">
                  Instant answers to your health questions, from the doctors you
                  trust.
                </p>
              </motion.div>
            </div>

            {/* RIGHT: 2x2 Video Grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-[420px] self-center">
              {dummyVideos.map((video, index) => (
                <div
                  key={index}
                  className={`relative flex justify-center items-center rounded-xl overflow-hidden shadow-md bg-black ${
                    index % 2 === 0 ? "h-[240px]" : "h-[280px]"
                  }`}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-100 h-full object-center"
                    
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
