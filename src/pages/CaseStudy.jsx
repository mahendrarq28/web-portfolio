import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { projects } from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center pt-32 pb-16 px-6">
          <div className="text-center">
            <p className="text-muted mb-4">This project could not be found.</p>
            <Link to="/" className="text-accent font-medium">
              Back to home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const cs = project.caseStudy;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <Link to="/#projects" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink transition-colors mb-8">
            <ArrowLeft size={16} />
            Back to projects
          </Link>

          <p className="text-xs font-medium text-accent mb-2">{project.category}</p>
          <h1 className="font-pixel text-lg sm:text-xl md:text-2xl text-ink mb-4 leading-relaxed">{project.title}</h1>

          {project.academicNote && (
            <p className="text-sm text-muted italic mb-8">{project.academicNote}</p>
          )}

          <div className="aspect-video card-soft overflow-hidden bg-line/40 mb-12">
            <img src={project.image} alt={`${project.title} preview`} decoding="async" className="w-full h-full object-cover" />
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="font-heading font-semibold text-xl text-ink mb-2">Project Overview</h2>
              <p className="text-muted leading-relaxed">{cs.overview}</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-ink mb-2">The Problem</h2>
              <p className="text-muted leading-relaxed">{cs.problem}</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-ink mb-2">The Approach</h2>
              <p className="text-muted leading-relaxed">{cs.approach}</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-ink mb-2">Design / Development Process</h2>
              <p className="text-muted leading-relaxed">{cs.process}</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-ink mb-2">Technology Used</h2>
              <div className="flex flex-wrap gap-2">
                {cs.technologyUsed.map((tech) => (
                  <span key={tech} className="text-sm text-ink border border-line rounded-full px-3 py-1.5">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-ink mb-2">Final Result</h2>
              <p className="text-muted leading-relaxed">{cs.result}</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-ink mb-2">What I Learned</h2>
              <p className="text-muted leading-relaxed">{cs.learned}</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
