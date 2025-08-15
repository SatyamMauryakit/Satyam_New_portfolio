"use client";
import { Section, GlassCard } from "./Section";
import { useModeStore } from "@/lib/modeStore";
import { skillsByMode } from "@/lib/data";

export default function Skills() {
  const mode = useModeStore(s => s.mode);
  const SKILLS = skillsByMode(mode);

  return (
    <Section id="skills" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Skills & Tools</h2>
        <p className="mt-2 text-white/70 max-w-2xl">
          {mode === "developer" ? "A frontend-first stack with solid backend chops." : "Cloud-native tooling for automation, reliability and scale."}
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 flex flex-col-2">
          {SKILLS.map((s) => (
            <GlassCard key={s.name}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white">{s.name}</p>
                  <p className="text-white/60 text-sm">{s.level}</p>
                </div>
                <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,.8)]" />
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
