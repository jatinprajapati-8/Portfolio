import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import MagneticButton from "../components/MagneticButton";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState("");

  const SHEET_API = import.meta.env.VITE_SHEET_API;

  const onSubmit = async (e) => {
    e.preventDefault();
    setDone("");

    const form = e.currentTarget;

    const payload = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("name", payload.name);
      formData.append("email", payload.email);
      formData.append("message", payload.message);

      const res = await fetch(SHEET_API, {
        method: "POST",
        body: formData,
      });

      const text = await res.text();

      if (text.includes("OK")) {
        setDone("✅ Message Sent successfully!");
        form.reset();
      } else {
        setDone("❌ Failed to save. Try again later.");
      }
    } catch (err) {
      // console.error(err);
      setDone("❌ Failed to save. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper id="contact" label="Contact">
      <div className="grid md:grid-cols-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="md:col-span-5"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-fg">
            Let’s build something premium.
          </h2>

          <p className="mt-4 text-muted/85 leading-relaxed">
            Want a full-stack app or a clean portfolio? Drop a message.
          </p>

          <div className="mt-6 rounded-3xl border border-line bg-card p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-muted/70">
              Quick Info
            </p>
            <div className="mt-4 space-y-3 text-sm">
              <a
                href="mailto:jatinparjapati93@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition"
              >
                📧 <span>jatinparjapati93@gmail.com</span>
              </a>

              <a
                href="https://wa.me/919319385182"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-primary transition"
              >
                📱 <span>+91 9319385182</span>
              </a>

              <a
                href="https://linkedin.com/in/jatin-prajapati93"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-primary transition"
              >
                💼 <span>Connect on LinkedIn</span>
              </a>
              <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                🌍 <span>Location: Chandigarh,India</span>
              </p>

              <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                💼 <span>Full-Stack Developer</span>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          onSubmit={onSubmit}
          className="md:col-span-7 rounded-3xl border border-line bg-card p-6 md:p-7"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              required
              name="name"
              placeholder="Your name"
              className="rounded-2xl border border-line bg-bg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
            />
            <input
              required
              name="email"
              type="email"
              placeholder="Your email"
              className="rounded-2xl border border-line bg-bg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
            />
          </div>

          <textarea
            required
            name="message"
            rows={5}
            placeholder="Tell me about your project..."
            className="mt-4 w-full rounded-2xl border border-line bg-bg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10 resize-none"
          />

          <div className="mt-5 flex items-center justify-between gap-3">
            <p className="text-xs text-muted/70">
              {done ? done : "No spam. Straight to the point."}
            </p>

            <MagneticButton type="submit" disabled={loading}>
              {loading ? "Saving..." : "Send Message"}
            </MagneticButton>
          </div>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
