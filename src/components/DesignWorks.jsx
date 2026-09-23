import { useMemo, useState } from "react";
import { designCategories, designWorks } from "../data/designWorks";
import { useReveal } from "../hooks/useReveal";

export default function DesignWorks() {
  const ref = useReveal();
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? designWorks : designWorks.filter((w) => w.category === active)),
    [active]
  );

  return (
    <section id="design" className="py-24 md:py-32 border-t border-line">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <h2 className="font-pixel text-xl sm:text-2xl md:text-3xl text-ink leading-relaxed">Selected Design Works</h2>

          <div className="flex flex-wrap gap-2">
            {designCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
                className={`text-sm px-3.5 py-1.5 rounded-full border-2 border-dashed transition-all duration-200 active:scale-95 ${
                  active === cat
                    ? "bg-accent text-paper border-ink border-solid"
                    : "border-line text-muted hover:text-ink hover:border-ink hover:-translate-y-0.5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div key={active} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((work, i) => (
            <figure
              key={work.name + i}
              style={{ "--i": i }}
              className="animate-pop-in pixel-lift group card-soft overflow-hidden"
            >
              <div className="aspect-square overflow-hidden bg-line/40">
                <img
                  src={work.image}
                  alt={work.name}
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={1200}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
                />
              </div>
              <figcaption className="p-4">
                <p className="text-xs text-accent font-medium mb-1">{work.category}</p>
                <p className="font-heading font-semibold text-ink">{work.name}</p>
                <p className="text-sm text-muted mt-1">{work.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
