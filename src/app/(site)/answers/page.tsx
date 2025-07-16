// Can be used in a file like pages/knee-surgery.tsx
"use client";

import React from "react";
import { Paperclip, Send, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

const videos = [
  {
    youtubeId: "4AwyVTHEU3s",
    title: "Aftercare for Knee Surgery: Showering Safely",
    doctor: "By Dr. Megan Roberts — Orthopedic Surgeon",
    duration: "02:01:09",
  },
  {
    youtubeId: "d7sUWwHugg8",
    title: "Aftercare for Knee Surgery: Showering Safely",
    doctor: "By Dr. Megan Roberts — Orthopedic Surgeon",
    duration: "02:01:09",
  },
  {
    youtubeId: "Rl5Y9Eem3tc",
    title: "Aftercare for Knee Surgery: Showering Safely",
    doctor: "By Dr. Megan Roberts — Orthopedic Surgeon",
    duration: "02:01:09",
  },
];

const sources = [
  { name: "Dr Sarah", image: "/images/home/creative/creative_img_1.png" },
  { name: "AAOS", image: "/images/home/creative/creative_img_2.png" },
  { name: "Kim John", image: "/images/home/creative/creative_img_3.png" },
  { name: "Dr Sarah", image: "/images/home/creative/creative_img_4.png" },
];

const answers = [
  {
    title: "1 - When Can I Start Showering",
    points: [
      "Wait at least 48–72 hours before showering to allow the wound to seal.",
      "Your surgeon may adjust this timeline based on your specific surgery.",
    ],
  },
  {
    title: "2 - Protect My Wound While Showering",
    points: [
      "Use a waterproof dressing to fully cover the incision.",
      "Avoid direct water pressure on the wound.",
      "Pat the area dry—don’t rub!",
    ],
  },
  {
    title: "3 - Things to Avoid",
    points: [
      "Use a waterproof dressing to fully cover the incision.",
      "Avoid direct water pressure on the wound.",
      "Pat the area dry—don’t rub!",
    ],
  },
  {
    title: "4 - If Something’s Wrong",
    points: [
      "Watch for signs of infection: redness, swelling, unusual discharge, or fever.",
      "If you notice any of these, contact your healthcare provider immediately.",
    ],
  },
];

export default function KneeSurgeryPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
    <div className="mb-4">
    <Link
      href="/"
      className="text-sm  hover:underline flex items-center gap-1"
    >
      <span className="text-3xl">←</span> 
    </Link>
  </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">
        Can I Shower After My Knee Surgery?
      </h1>

      <section className="mb-8">
        <h2 className="text-sm font-semibold text-gray-600 mb-2 flex items-center gap-1">
          <LinkIcon size={16} className="text-gray-500" /> Sources
        </h2>
        <div className="flex flex-wrap gap-3 text-sm text-gray-700">
          {sources.map((source, index) => (
            <span
              key={index}
              className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-2"
            >
              <img
                src={source.image}
                alt={source.name}
                className="w-5 h-5 rounded-full"
              />
              {source.name}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-xl shadow-md p-6 space-y-6">
        {answers.map((answer, index) => (
          <div key={index}>
            <h3 className="font-semibold text-base text-gray-900 mb-2">{answer.title}</h3>
            <ul className="list-disc ml-6 text-[15px] leading-relaxed text-gray-700 space-y-2">
              {answer.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-14">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-md bg-black h-[320px]"
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${video.youtubeId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                <h4 className="text-white font-semibold text-sm">{video.title}</h4>
                <p className="text-white/70 text-xs">{video.doctor}</p>
                <span className="text-white/60 text-xs mt-1 block">{video.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-10 relative">
        <input
          type="text"
          placeholder="Ask a follow up question"
          className="w-full rounded-full px-4 py-3 bg-gray-100 focus:outline-none text-sm pr-12"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
          <Send size={18} />
        </button>
      </div>
    </main>
  );
}