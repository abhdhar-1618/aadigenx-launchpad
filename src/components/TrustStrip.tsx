import { motion } from "framer-motion";
import { Shield, Heart, Sprout, Eye } from "lucide-react";

const points = [
  { icon: Shield, text: "Structured learning approach" },
  { icon: Heart, text: "Student-focused methodology" },
  { icon: Sprout, text: "Designed for long-term growth" },
  { icon: Eye, text: "Simple and transparent enrollment" },
];

const TrustStrip = () => {
  return (
    <section className="py-16 px-6 border-y border-border/50">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <point.icon className="w-5 h-5 text-primary" />
              <span className="text-foreground text-sm font-medium">
                {point.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
