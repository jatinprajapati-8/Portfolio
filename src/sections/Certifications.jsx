import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" label="Certifications">
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {certifications.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-3xl border border-line bg-card p-6 hover:bg-card2 transition"
          >
            <p className="text-lg font-semibold text-fg">{c.name}</p>
            <p className="mt-2 text-sm text-muted/80">{c.org}</p>
            <p className="mt-1 text-xs text-muted/60 uppercase tracking-[0.25em]">
              {c.year}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
