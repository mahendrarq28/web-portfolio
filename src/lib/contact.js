import { social } from "../data/social";

// Handles submission of the contact form.
//
// No backend yet, so this opens the visitor's own email app with a
// message pre-addressed to social.email (set in src/data/social.js) and
// pre-filled with what they typed. It works immediately, with zero setup
// — the trade-off is that it hands off to an external mail app instead of
// sending silently in the background, and it does nothing if the visitor
// has no default mail app configured (common on some mobile browsers).
//
// To send silently from within the page instead, swap the body of this
// function for a real service once you're ready to set one up:
//
// Formspree example (free tier, no server needed — sign up at
// formspree.io, create a form, copy its form ID):
//   const res = await fetch("https://formspree.io/f/your-form-id", {
//     method: "POST",
//     headers: { Accept: "application/json" },
//     body: new FormData(formElement),
//   });
//   if (!res.ok) throw new Error("Request failed");
//
// EmailJS example:
//   await emailjs.send(serviceId, templateId, values, publicKey);
//
// Custom API example:
//   const res = await fetch("/api/contact", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(values),
//   });
//   if (!res.ok) throw new Error("Request failed");

export async function submitContactForm({ name, email, message }) {
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);

  window.location.href = `mailto:${social.email}?subject=${subject}&body=${body}`;

  return { ok: true };
}
