import { skillCategories } from "../data/skills";
import { useReveal } from "../hooks/useReveal";

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="py-24 md:py-32 border-t border-line">
      <div ref={ref} className="reveal reveal-stagger-group max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-ink mb-12">Skills</h2>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {skillCategories.map((category, ci) => (
            <div key={category.title} style={{ "--i": ci }} className="reveal-stagger">
              <h3 className="font-heading font-semibold text-ink mb-4">{category.title}</h3>
              <div className="grid grid-cols-2 gap-2.5">
                {category.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-ink text-bg text-xs sm:text-sm font-medium px-3 py-3.5 flex items-center justify-center text-center leading-snug border-2 border-dashed border-accent hover:bg-accent hover:border-ink hover:-translate-y-1 active:scale-95 transition-all duration-200 cursor-default"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
