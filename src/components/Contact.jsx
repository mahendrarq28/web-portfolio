import { useState } from "react";
import { Mail, Check } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin, InstagramIcon as Instagram } from "./icons/BrandIcons";
import { submitContactForm } from "../lib/contact";
import { social } from "../data/social";
import { useReveal } from "../hooks/useReveal";

const initialState = { name: "", email: "", message: "" };

export default function Contact() {
  const ref = useReveal();
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!values.email.trim()) {
      next.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!values.message.trim()) next.message = "Message is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      // submitContactForm opens the visitor's email app addressed to
      // social.email. Swap its implementation (see src/lib/contact.js)
      // to call Formspree, EmailJS, or a custom API instead, without
      // touching this component.
      await submitContactForm(values);
      setStatus("success");
      setValues(initialState);
    } catch {
      setStatus("idle");
      setErrors({ form: "Something went wrong. Please try again." });
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-line">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-14">
        <div>
          <h2 className="font-pixel text-lg sm:text-xl md:text-2xl text-ink mb-5 leading-relaxed max-w-sm">
            Let's Build Something Together.
          </h2>
          <p className="text-muted max-w-sm leading-relaxed">
            Whether it's a web project, design collaboration, or just a conversation about
            technology and creativity, feel free to reach out.
          </p>

          <div className="mt-10 flex items-center gap-3">
            {[
              { Icon: Mail, href: `mailto:${social.email}`, label: "Email" },
              { Icon: Linkedin, href: social.linkedin, label: "LinkedIn" },
              { Icon: Github, href: social.github, label: "GitHub" },
              { Icon: Instagram, href: social.instagram, label: "Instagram" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noreferrer noopener"}
                aria-label={label}
                className="w-12 h-12 rounded-2xl bg-ink text-bg flex items-center justify-center hover:-translate-y-1 hover:rotate-6 hover:bg-accent active:scale-90 transition-all duration-200"
              >
                <Icon size={19} />
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              className="pixel-btn inline-flex items-center gap-2 rounded-2xl bg-accent px-7 py-3.5 text-sm font-medium text-paper disabled:opacity-60"
            />
            {errors.name && <p id="name-error" className="text-xs text-red-600 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="w-full rounded-2xl border border-line bg-paper px-4 py-3 text-ink focus:outline-none focus:border-accent"
            />
            {errors.email && <p id="email-error" className="text-xs text-red-600 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={values.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="w-full rounded-2xl border border-line bg-paper px-4 py-3 text-ink focus:outline-none focus:border-accent resize-none"
            />
            {errors.message && <p id="message-error" className="text-xs text-red-600 mt-1">{errors.message}</p>}
          </div>

          {errors.form && <p className="text-sm text-red-600">{errors.form}</p>}

          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center gap-2 rounded-2xl bg-accent px-7 py-3.5 text-sm font-medium text-white hover:opacity-90 hover:-translate-y-0.5 active:scale-95 active:translate-y-0 transition-all duration-200 disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {status === "loading" ? "Sending..." : status === "success" ? (
              <>
                <Check size={16} /> Message Sent
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
