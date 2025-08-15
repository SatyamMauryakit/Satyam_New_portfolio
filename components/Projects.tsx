"use client";

import { Section } from "./Section";
import { useModeStore } from "@/lib/modeStore";
import { projectsByMode } from "@/lib/data";
import { Code, ExternalLink } from "lucide-react";

// A reusable ProjectCard component to keep the main component clean
function ProjectCard({ project }) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl
                 transition-all duration-300 hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/10"
    >
      {/* Project Image */}
      <a href={project.demo} target="_blank" rel="noreferrer" className="block">
        <div className="aspect-[16/11] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </a>

      {/* Project Details */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white transition-colors group-hover:text-sky-400">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-white/70">{project.desc}</p>
          </div>
          <div className="flex items-center gap-2">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                aria-label={`View code for ${project.title}`}
                className="shrink-0 rounded-full border border-white/15 p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Code size={16} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`View live demo for ${project.title}`}
                className="shrink-0 rounded-full border border-white/15 p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 transition-colors group-hover:bg-sky-500/20 group-hover:text-sky-200"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const mode = useModeStore((s) => s.mode);
  const PROJECTS = projectsByMode(mode);

  return (
    <Section id="projects" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Selected Projects</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          {mode === "developer" ? "Polished UIs and full-stack features." : "Production-grade infra and pipelines."}
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </Section>
  );
}