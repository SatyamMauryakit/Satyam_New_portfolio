import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export const Section = ({ id, children, className = "" }: PropsWithChildren<{id: string, className?: string}>) => (
  <section id={id} className={`scroll-mt-24 ${className}`}>{children}</section>
);

export const GlassCard = ({ children, className = "" }: PropsWithChildren<{className?: string}>) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    className={`rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl ${className}`}
  >
    {children}
  </motion.div>
);
