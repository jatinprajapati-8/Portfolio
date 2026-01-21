import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about" label="About">
      <div className="grid md:grid-cols-12 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="md:col-span-7"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-fg">
            Developer who cares about product polish.
          </h2>

          <p className="mt-4 text-muted/80 leading-relaxed">
            I create full-stack apps with clean UI, strong API structure, and smooth
            user experience. I love building real-world products like chat apps,
            dashboards, and e-commerce flows.
          </p>

          <p className="mt-3 text-muted/80 leading-relaxed">
            My focus: performance, maintainable code, and premium UI motion.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="md:col-span-5"
        >
          <div className="rounded-2xl border border-line bg-card p-6">
            <p className="text-sm text-muted/70 uppercase tracking-[0.25em]">
              Skills
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "JavaScript",
                "React",
                "Tailwind",
                "Node.js",
                "Express",
                "MySql",
                "MongoDB",
                "JWT",
                "REST APIs",
                "Socket.io",
              ].map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-line bg-card2 px-3 py-1 text-xs text-muted/90"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
