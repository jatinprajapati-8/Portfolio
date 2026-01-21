import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const ids = useMemo(() => links.map((l) => l.id), []);

  useEffect(() => {
    const handler = () => {
      const sections = ids
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      const pos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (pos >= s.offsetTop) {
          setActive(s.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handler, { passive: true });
    handler();

    return () => window.removeEventListener("scroll", handler);
  }, [ids]);

  const jump = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 md:px-6 pt-4">
        <motion.nav
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between rounded-2xl border border-black/10 bg-white/70 backdrop-blur-xl px-4 py-3 shadow-sm"
        >
          {/* Logo */}
          <button
            onClick={() => jump("home")}
            className="text-sm tracking-wide text-black/90 hover:text-black transition"
          >
            <div className="text-[12px] font-bold">
              <div className="bg-gradient-to-r from-black to-gray-250 bg-clip-text text-transparent">
                Jatin Prajapati
              </div>

              <hr className="my-1 border-line" />

              <span className="text-[14px] font-light text-muted/90">
                Full Stack Developer
              </span>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 relative">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => jump(l.id)}
                className={`relative rounded-full px-3 py-2 text-xs transition ${
                  active === l.id
                    ? "text-black"
                    : "text-black/55 hover:text-black"
                }`}
              >
                {active === l.id && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-black/5"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}

                <span className="relative z-10 flex items-center gap-2">
                  {/* dot indicator */}
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition ${
                      active === l.id ? "bg-black" : "bg-black/20"
                    }`}
                  />
                  {l.label}
                </span>
              </button>
            ))}
          </div>

          {/* Right CTA + Mobile menu */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => jump("contact")}
              className="hidden sm:inline-flex rounded-full bg-black text-white px-4 py-2 text-xs font-medium hover:opacity-90 transition"
            >
              Hire me
            </button>
            <button
              onClick={toggleTheme}
              className="rounded-full border border-line bg-bg px-3 py-2 hover:bg-card transition"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden rounded-full border border-black/10 bg-white px-3 py-2 hover:bg-black/5 transition"
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-50"
              onClick={() => setOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm z-50 bg-white border-l border-black/10 shadow-2xl"
            >
              <div className="p-4 flex items-center justify-between border-b border-black/10">
                <p className="text-sm font-medium text-black">Menu</p>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-black/10 bg-white p-2 hover:bg-black/5 transition"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-4">
                <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-3">
                  {links.map((l) => (
                    <button
                      key={l.id}
                      onClick={() => jump(l.id)}
                      className={`w-full text-left flex items-center justify-between px-3 py-3 rounded-xl transition ${
                        active === l.id
                          ? "bg-black text-white"
                          : "text-black/75 hover:bg-black/5"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`h-2 w-2 rounded-full ${
                            active === l.id ? "bg-white" : "bg-black/25"
                          }`}
                        />
                        <span className="text-sm">{l.label}</span>
                      </span>

                      <span className="text-xs opacity-60">↵</span>
                    </button>
                  ))}
                </div>

                <div className="mt-4 flex flex-col gap-2">
                  <button
                    onClick={() => jump("contact")}
                    className="rounded-2xl bg-black text-white px-4 py-3 text-sm font-medium hover:opacity-90 transition"
                  >
                    Let’s Talk
                  </button>

                  <button
                    onClick={() => jump("projects")}
                    className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black/80 hover:bg-black/5 transition"
                  >
                    View Work
                  </button>
                </div>

                <p className="mt-6 text-xs text-black/45 leading-relaxed">
                  Clean UI, premium motion, strong backend.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
