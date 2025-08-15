"use client";
import { Section, GlassCard } from "./Section";
import { testimonials } from "@/lib/data";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <Section id="testimonials" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          What Our Clients Say
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((q, i) => (
            <GlassCard
              key={i}
              className="group flex flex-col p-6 transition-all duration-300 hover:scale-[1.02] hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/10"
            >
              <div className="flex items-center justify-between">
                {/* Profile Image - Add this to your data */}
               
               {q.image && (
                  <img
                    src={q.image}
                    alt={q.author}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                )}
                   
                {/* Quote Icon */}
                <Quote
                  size={32}
                  className="text-white/30 transition-colors duration-300 group-hover:text-sky-400"
                />
              </div>

              {/* Quote Text */}
              <p className="mt-6 flex-grow text-white/90">
                “{q.quote}”
              </p>

              {/* Author and Role */}
              <p className="mt-4 text-sm font-semibold text-white">
                {q.author}
              </p>
              <p className="text-sm text-white/70">{q.role}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </Section>
  );
}