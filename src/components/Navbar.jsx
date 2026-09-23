import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Design", href: "#design" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/90 backdrop-blur border-b border-line" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-heading font-semibold text-ink tracking-tight">
          Welcome!
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-ink">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="group relative py-1 hover:text-accent transition-colors">
                {link.label}
                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/assets/documents/cv-mahendra-arqudanta.pdf"
          download
          className="pixel-btn hidden md:inline-flex items-center rounded-full bg-paper px-4 py-2 text-sm font-medium text-ink"
        >
          Download CV
        </a>

        <button
          className="md:hidden p-2 text-ink active:scale-90 transition-transform duration-150"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bg border-t border-line px-6 py-4 animate-pop-in">
          <ul className="flex flex-col gap-4 text-ink">
            {links.map((link, i) => (
              <li key={link.href} style={{ "--i": i }} className="animate-pop-in">
                <a href={link.href} className="block py-1" onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/assets/documents/cv-mahendra-arqudanta.pdf"
            download
            className="mt-4 inline-flex items-center rounded-full border border-ink px-4 py-2 text-sm font-medium text-ink active:scale-95 transition-transform duration-150"
            onClick={() => setOpen(false)}
          >
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}
