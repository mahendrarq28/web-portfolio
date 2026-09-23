import { useReveal } from "../hooks/useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="py-24 md:py-32 border-t border-line">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-ink mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-lg md:text-xl leading-relaxed text-ink">
              I'm Mahendra Arqudanta, an Information Systems student at Universitas Negeri Semarang
              with an interest in web development, system analysis, UI/UX, and visual design.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Through academic projects, organizational experience, and creative work, I enjoy
              exploring how technology and design can work together to create useful and meaningful
              digital experiences.
            </p>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-sm font-medium text-muted mb-3">Education</h3>
              <p className="font-heading font-semibold text-ink">Universitas Negeri Semarang</p>
              <p className="text-ink">Bachelor of Information Systems</p>
              <p className="text-muted text-sm">2024 – Present</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted mb-3">Interests</h3>
              <ul className="space-y-1 text-ink">
                <li>Web Development</li>
                <li>System Analysis &amp; Design</li>
                <li>UI/UX</li>
                <li>Visual &amp; Editorial Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
