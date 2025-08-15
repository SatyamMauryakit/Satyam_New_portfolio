"use client";
import { Section, GlassCard } from "./Section";
import { useModeStore } from "@/lib/modeStore";
import { experienceByMode } from "@/lib/data";
import { Briefcase, Calendar } from "lucide-react"; // Use more semantically relevant icons

// A reusable component for a single experience card
function ExperienceCard({ item }: { item: any }) {
  return (
    <GlassCard className="group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/10">
      {/* Visual flair on hover */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-transparent via-sky-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-white transition-colors group-hover:text-sky-400">{item.role}</h3>
          <p className="flex items-center gap-2 text-white/70 text-sm mt-1">
            <Briefcase size={16} className="text-sky-400" />
            <span>{item.company}</span>
          </p>
          <p className="flex items-center gap-2 text-white/50 text-xs mt-1">
            <Calendar size={14} className="text-white/50" />
            <span>{item.period}</span>
          </p>
        </div>
        {/* You can add a logo or an icon here based on the company */}
      </div>

      <ul className="relative z-10 mt-4 space-y-2 list-disc pl-5 text-white/80 text-sm">
        {item.bullets.map((b : string, idx : number) => (
          <li key={idx} className="transition-colors group-hover:text-white">{b}</li>
        ))}
      </ul>
    </GlassCard>
  );
}

export default function Experience() {
  const mode = useModeStore(s => s.mode);
  const ITEMS = experienceByMode(mode);

  return (
    <Section id="experience" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Experience</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {ITEMS.map((e, i) => (
            <ExperienceCard key={i} item={e} />
          ))}
        </div>
      </div>
    </Section>
  );
}