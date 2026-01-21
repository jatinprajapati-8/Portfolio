import React from "react";
export default function SectionWrapper({ id, label, children }) {
  return (
    <section id={id} className="relative py-20 md:py-28 scroll-mt-24">
      <div className="mb-10 flex items-center gap-3">
        <div className="h-[1px] w-10 bg-line" />
        <p className="text-xs uppercase tracking-[0.35em] text-muted/70">
          {label}
        </p>
      </div>

      {children}
    </section>
  );
}

