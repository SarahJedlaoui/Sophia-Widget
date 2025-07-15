"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Innovation() {
  const ref = useRef(null);
  const inView = useInView(ref);

  const innovationList = [
    {
      youtubeId: "4AwyVTHEU3s",
      title: "How to Focus to Change Your Brain | Huberman Lab Essentials",
    },
    {
      youtubeId: "d7sUWwHugg8",
      title: "Joe Dispenza: You've Been Programmed To Stay BROKE, STUCK & EXHAUSTED - Here's How To Break It!",
    },
    {
      youtubeId: "Rl5Y9Eem3tc",
      title: "Stress Doctor: 5 Tools to Protect Your Brain From Stress & Feel Calmer Now",
      },
    {
      youtubeId: "_NP5iQ0p2Eg",
      title: "Healthy Skin 101 with Dr Noreen - What Every Woman Should Know About Her Skin",
     },
    {
      youtubeId: "0SPC_Q7-k40",
      title: "BRAIN HEALTH EXPERT: Change Your Brain, Change Your Life ",
      },
  ];

  const bottomAnimation = (index: any) => ({
    initial: { y: "25%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "25%", opacity: 0 },
    transition: { duration: 0.3, delay: 0.3 + index * 0.3 },
  });
  return (
    <section id="services">
      <div ref={ref} className="mt-24 2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col justify-center items-left gap-10 lg:gap-16">
              <motion.div {...bottomAnimation(1)} className="text-left">
                <h2>Most Watched Health Videos</h2>
                <p className="mt-5 text-dark_black/60 dark:text-white/60">
                  Patients love these helpful clips recorded by our team.
                </p>
              </motion.div>
              <motion.div
                {...bottomAnimation(2)}
                className="grid auto-rows-max grid-cols-2 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-5 gap-6 w-full"
              >
                {innovationList.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col rounded-lg overflow-hidden bg-black group"
                  >
                    {/* Thumbnail with custom play button */}
                    <div className="relative aspect-[8/9] w-full bg-black">
                     <iframe
                    src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${item.youtubeId}`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full object-center"
                    
                  />
                      
                    </div>

                    {/* Text content */}
                    <div className="p-3 text-white bg-black h-full">
                      <p className="text-xs text-white/80 mt-1 leading-tight">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Innovation;
