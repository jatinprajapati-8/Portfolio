import React from "react";
export default function Footer() {
  return (
    <footer className="border-t border-line mt-14">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-10 text-sm text-muted/80 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Jatin Prajapati</p>
        <p className="text-muted/60">Built with React • Tailwind • Framer Motion</p>
      </div>
    </footer>
  );
}
