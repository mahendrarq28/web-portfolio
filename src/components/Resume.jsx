import { Download } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

export default function Resume() {
  const ref = useReveal();

  return (
    <section id="resume" className="py-24 md:py-32 border-t border-line">
      <div
        ref={ref}
        className="reveal card-soft max-w-6xl mx-auto px-6 md:px-8 p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
      >
        <div>
          <h2 className="font-pixel text-lg sm:text-xl md:text-2xl text-ink mb-4 leading-relaxed max-w-sm">
            Interested in working together?
          </h2>
          <p className="text-muted max-w-md">
            Explore my experience and background through my resume.
          </p>
        </div>

        <a
          href="/assets/documents/cv-mahendra-arqudanta.pdf"
          download
          className="pixel-btn group inline-flex items-center gap-2 rounded-2xl bg-accent px-6 py-3 text-sm font-semibold text-paper shrink-0"
        >
          <Download size={16} className="transition-transform duration-200 group-hover:translate-y-0.5" />
          Download CV
        </a>
      </div>
    </section>
  );
}
