import { motion } from "framer-motion";
import { CalendarDays, Clock, BookOpen } from "lucide-react";

const ScheduleSection = () => {
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
            Clarity & Structure
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Program Structure
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Duration */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <CalendarDays className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Duration</h3>
            </div>
            <p className="text-2xl font-bold text-foreground tabular-nums">
              10 April – 10 July
            </p>
          </motion.div>

          {/* Weekly Classes */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">
                Weekly Classes
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="gold-border-left">
                <span className="text-foreground font-medium">Wednesday</span>
                <span className="text-muted-foreground block tabular-nums">7:00 PM – 9:00 PM</span>
              </li>
              <li className="gold-border-left">
                <span className="text-foreground font-medium">Saturday</span>
                <span className="text-muted-foreground block tabular-nums">7:00 PM – 9:00 PM</span>
              </li>
            </ul>
          </motion.div>

          {/* Focus Areas - full width */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">
                Focus Areas
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {["Study Discipline", "Concept Clarity", "Exam Readiness"].map(
                (area, i) => (
                  <div key={i} className="gold-border-left">
                    <span className="text-foreground font-medium">{area}</span>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
