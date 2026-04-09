import { motion } from "framer-motion";
import { Clock, Eye, Brain, Zap, Target, BookOpen, Lightbulb, TrendingUp } from "lucide-react";

const stages = [
  {
    icon: Eye,
    title: "Observe",
    description: "Track study patterns and learning behaviours",
  },
  {
    icon: Brain,
    title: "Understand",
    description: "Identify what works and where gaps exist",
  },
  {
    icon: Zap,
    title: "Decide",
    description: "Improve approach with clarity and confidence",
  },
];

const buildCards = [
  {
    icon: Target,
    title: "Pattern Recognition",
    description: "Spot recurring structures across problems and subjects",
  },
  {
    icon: Lightbulb,
    title: "Conceptual Clarity",
    description: "Move beyond memorisation to true understanding",
  },
  {
    icon: BookOpen,
    title: "Study Discipline",
    description: "Build sustainable habits that compound over time",
  },
  {
    icon: TrendingUp,
    title: "Decision-Making",
    description: "Choose the right approach under pressure",
  },
];

const ScheduleSection = () => {
  return (
    <section className="py-28 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
            The Framework
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            How MindXcelerate Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            A thinking-first methodology that transforms how students approach learning.
          </p>
        </motion.div>

        {/* 3-Step Flow */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 mb-28">
          {stages.map((stage, i) => (
            <div key={stage.title} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="relative flex flex-col items-center text-center w-56"
              >
                <div className="w-14 h-14 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center mb-5">
                  <stage.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1.5">
                  {stage.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {stage.description}
                </p>
              </motion.div>

              {/* Connector arrow */}
              {i < stages.length - 1 && (
                <div className="hidden md:flex items-center mx-4">
                  <div className="w-16 h-px bg-gradient-to-r from-primary/50 to-primary/20" />
                  <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-primary/40" />
                </div>
              )}
              {i < stages.length - 1 && (
                <div className="flex md:hidden flex-col items-center my-2">
                  <div className="h-8 w-px bg-gradient-to-b from-primary/50 to-primary/20" />
                  <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-primary/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* What Students Build */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-3 block text-center">
            Outcomes
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-14">
            What Students Build
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {buildCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card p-7 group hover:border-primary/30 transition-colors duration-300"
            >
              <card.icon className="w-5 h-5 text-primary mb-5 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h4 className="text-base font-semibold text-foreground mb-2">
                {card.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Weekly Classes — secondary */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-5">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground">
              Weekly Classes
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="tabular-nums">
              <span className="text-foreground/80 font-medium">Wed</span>{" "}
              7 – 9 PM
            </span>
            <span className="hidden sm:inline text-border">|</span>
            <span className="tabular-nums">
              <span className="text-foreground/80 font-medium">Sat</span>{" "}
              7 – 9 PM
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;
