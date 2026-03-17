import { motion } from "framer-motion";
import { Brain, BookOpen, Target, TrendingUp } from "lucide-react";

const cards = [
  {
    icon: Brain,
    title: "Pattern Recognition",
    description: "Train the mind to identify structures and connections across subjects.",
  },
  {
    icon: BookOpen,
    title: "Study Discipline",
    description: "Build consistent habits that translate into long-term academic growth.",
  },
  {
    icon: Target,
    title: "Conceptual Clarity",
    description: "Move beyond rote learning toward deep, lasting understanding.",
  },
  {
    icon: TrendingUp,
    title: "Exam Readiness",
    description: "Prepare with structured methods designed for confidence and results.",
  },
];

const AboutSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wide uppercase mb-4 block">
            The Program
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Data Shastra
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Data Shastra is not just a course — it is a cognitive foundation for
            structured thinking and disciplined learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="glass-card p-8 hover:border-primary/30 transition-colors"
            >
              <card.icon className="w-6 h-6 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
