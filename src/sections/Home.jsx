import React from "react";
import { motion } from "framer-motion";
import MagneticButton from "../components/MagneticButton";
import me from "../assets/me.jpeg"

export default function Home() {
  return (
    <section id="home" className="pt-16 md:pt-24 pb-10 scroll-mt-24">
      <div className="relative overflow-hidden rounded-[32px] border border-line bg-gradient-to-b from-card to-card2">
        <div className="absolute inset-0 opacity-70">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-card2 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-card blur-3xl" />
        </div>

        <div className="relative px-6 py-14 md:px-12 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            {/* LEFT TEXT */}
            <div className="md:col-span-8">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="text-xs uppercase tracking-[0.35em] text-muted/70"
              >
                Full-Stack Developer
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 }}
                className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.05] text-fg"
              >
                I build clean, fast & scalable
                <span className="text-muted/80"> web products.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 }}
                className="mt-6 max-w-2xl text-muted/80 text-base md:text-lg leading-relaxed"
              >
                React • Node/Express • MongoDB • REST APIs • Auth • Real-time features.
                Minimal design, premium details, smooth motion.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22 }}
                className="mt-8 flex flex-col sm:flex-row gap-3"
              >
                <MagneticButton
                  onClick={() =>
                    document.getElementById("projects")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="w-full sm:w-auto"
                >
                  View Projects
                </MagneticButton>

                <button
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="rounded-full border border-line px-5 py-3 text-sm text-muted/90 hover:text-fg hover:bg-card transition w-full sm:w-auto"
                >
                  Contact
                </button>
              </motion.div>
            </div>

            {/* RIGHT PHOTO */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="md:col-span-4 flex md:justify-end"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-[28px] bg-card2 blur-xl scale-110" />

                <div className="relative rounded-[28px] border border-line bg-bg p-2">
                  <img
                    src={me}
                    alt="Jatin Prajapati"
                    className="h-[260px] w-[260px] md:h-[280px] md:w-[280px] object-cover rounded-[22px]"
                  />
                </div>

                <div className="mt-3 text-center text-xs text-muted/70">
                  Jatin Prajapati • Full Stack Developer
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
