import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Server } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import { projects } from "../data/projects";

function ProjectCard({ p, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: i * 0.06 }}
      className="group rounded-3xl border border-line bg-card p-6 md:p-7 hover:bg-card2 transition"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-fg">
            {p.title}
          </h3>
          <p className="mt-1 text-sm text-muted/70">{p.subtitle}</p>
        </div>

        <div className="flex items-center gap-2">
          {/* Frontend Repo */}
          {p.github && p.github !== "#" && (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              title="Frontend Repo"
              className="rounded-full border border-line bg-bg p-2 text-muted/80 hover:text-fg hover:bg-card transition"
            >
              <Github size={16} />
            </a>
          )}

          {/* Backend Repo */}
          {p.backend && p.backend !== "#" && (
            <a
              href={p.backend}
              target="_blank"
              rel="noreferrer"
              title="Backend Repo"
              className="rounded-full border border-line bg-bg p-2 text-muted/80 hover:text-fg hover:bg-card transition"
            >
              <Server size={16} />
            </a>
          )}

          {/* Live Demo */}
          {p.link && p.link !== "#" && (
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              title="Live Demo"
              className="rounded-full border border-line bg-bg p-2 text-muted/80 hover:text-fg hover:bg-card transition"
            >
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>

      <p className="mt-5 text-muted/85 leading-relaxed">{p.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-line bg-card2 px-3 py-1 text-xs text-muted/90"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 h-[1px] w-full bg-line" />
      <div className="mt-4 flex items-center justify-between">
        <p className="text-xs text-muted/60 uppercase tracking-[0.25em]">
          {p.status || "Project"}
        </p>
        <p className="text-xs text-muted/70">{p.year || ""}</p>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <SectionWrapper id="projects" label="Projects">
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
