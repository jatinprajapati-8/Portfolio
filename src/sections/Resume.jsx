import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import MagneticButton from "../components/MagneticButton";
import resumePdf from "../assets/resume.pdf";

export default function Resume() {
  return (
    <SectionWrapper id="resume" label="Resume">
      <div className="grid md:grid-cols-12 gap-6 items-start">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="md:col-span-7"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-fg">
            Resume — clean, verified & project-focused.
          </h2>

          <p className="mt-4 text-muted/85 leading-relaxed">
            Download the latest version of my resume.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a href={resumePdf} download="Jatin-Prajapati-Resume.pdf">
              <MagneticButton className="w-full sm:w-auto">
                <span className="flex items-center gap-2">
                  <Download size={16} />
                  Download Resume
                </span>
              </MagneticButton>
            </a>

            <a
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-5 py-3 text-sm text-muted/90 hover:text-fg hover:bg-card transition w-full sm:w-auto text-center"
            >
              View in New Tab
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="md:col-span-5"
        >
          <div className="rounded-3xl border border-line bg-card p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-muted/70">
              Highlights
            </p>

            <ul className="mt-4 space-y-3 text-muted/85 text-sm leading-relaxed">
              <li>• Full-stack apps with clean UI + strong backend</li>
              <li>• Auth, APIs, database models, real-time messaging</li>
              <li>• Production-like folder structure and scalability</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
