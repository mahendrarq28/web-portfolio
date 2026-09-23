import { ArrowRight, Download } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin, InstagramIcon as Instagram } from "./icons/BrandIcons";
import { social } from "../data/social";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-[0.85fr_1.15fr] gap-12 md:gap-16 items-center">
        {/* Illustration slot — swap /assets/profile/illustration-placeholder.jpg
            for a real portrait or illustration, any aspect ratio works. */}
        <div className="float-slow order-2 md:order-1">
          <div className="card-soft aspect-4/5 max-w-sm mx-auto md:mx-0 overflow-hidden">
            <img
              src="/assets/profile/illustration-placeholder.jpg"
              alt="Mahendra Arqudanta"
              width={1000}
              height={1250}
              fetchpriority="high"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <h1 className="font-pixel text-ink text-2xl sm:text-3xl md:text-4xl flex items-center gap-3">
              Hello!
              <span className="inline-block animate-[wave_2.2s_ease-in-out_infinite] origin-[70%_70%]" aria-hidden="true">
                👋
              </span>
              <span className="pixel-cursor" aria-hidden="true" />
            </h1>

          <p className="mt-6 font-heading font-semibold text-2xl md:text-3xl text-ink leading-snug max-w-xl">
            I'am Mahendra Arqudanta
          </p>
          <p className="mt-4 text-base md:text-lg text-muted max-w-md">
            Information Systems student focused on web development, system analysis, and visual design.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="pixel-btn group inline-flex items-center gap-2 rounded-2xl bg-accent px-7 py-3.5 text-sm font-semibold text-paper"
            >
              View My Work
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="/assets/documents/cv-mahendra-arqudanta.pdf"
              download
              className="pixel-btn group inline-flex items-center gap-2 rounded-2xl bg-paper px-7 py-3.5 text-sm font-semibold text-ink"
            >
              Download CV
              <Download size={16} className="transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3">
            {[
              { Icon: Github, href: social.github, label: "GitHub" },
              { Icon: Linkedin, href: social.linkedin, label: "LinkedIn" },
              { Icon: Instagram, href: social.instagram, label: "Instagram" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="w-11 h-11 rounded-2xl bg-ink text-bg border-2 border-dashed border-accent flex items-center justify-center hover:-translate-y-1 hover:rotate-6 hover:bg-accent hover:border-ink active:scale-90 transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
