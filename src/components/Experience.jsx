import { experience } from "../data/experience";
import { useReveal } from "../hooks/useReveal";

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" className="py-24 md:py-32 border-t border-line">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-ink mb-12">Experience</h2>

        <ol className="relative border-l border-line pl-8 space-y-14">
          {experience.map((item, i) => (
            <li key={i} className="relative">
              <span className="pulse-dot absolute -left-9.25 top-1.5 w-2.5 h-2.5 rounded-full bg-accent" />
              <p className="text-sm text-muted mb-1">{item.period}</p>
              <h3 className="font-heading font-semibold text-lg text-ink">{item.role}</h3>
              <p className="text-sm text-muted mb-3">{item.organization}</p>
              <p className="text-ink max-w-2xl leading-relaxed">{item.description}</p>

              {item.responsibilities.length > 0 && (
                <ul className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm text-muted max-w-2xl">
                  {item.responsibilities.map((resp) => (
                    <li key={resp} className="flex gap-2">
                      <span className="text-accent">–</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
