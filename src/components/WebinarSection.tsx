import { motion } from "framer-motion";
import { Calendar, Clock, Sparkles, Users, GraduationCap, ArrowRight } from "lucide-react";

const FORM_URL = "https://forms.gle/PdLLdrirh4gTmwr36";

const recurringSchedule = [
  {
    audience: "Parents",
    icon: Users,
    description: "Awareness sessions for parents on modern learning frameworks, student progress tracking, and how to support future-ready education at home.",
    sessions: [
      { day: "Every Saturday", time: "5:00 PM – 5:45 PM" },
    ],
    cta: "Reserve Your Spot",
  },
  {
    audience: "Students",
    icon: GraduationCap,
    description: "Interactive workshops where students explore pattern recognition, analytical thinking, and structured study techniques.",
    sessions: [
      { day: "Every Wednesday", time: "7:00 PM – 9:00 PM" },
      { day: "Every Saturday", time: "7:00 PM – 9:00 PM" },
    ],
    cta: "Join the Next Webinar",
  },
];

const WebinarSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Upcoming Featured Webinar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wide uppercase mb-4 block">
            Upcoming Event
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Parents & Students Awareness Webinar
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            A guided session showing how students begin recognizing patterns in
            daily life and improving their study habits.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              { icon: Calendar, label: "Saturday, 28 March" },
              { icon: Clock, label: "5:00 PM – 5:45 PM" },
              { icon: Sparkles, label: "₹11 Token of Shagun" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-foreground">
                <item.icon className="w-4 h-4 text-primary" />
                <span className="tabular-nums">{item.label}</span>
              </div>
            ))}
          </div>

          <motion.a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-sm transition-all hover:brightness-110 gold-glow w-full md:w-auto"
          >
            Reserve Your Spot
          </motion.a>
        </motion.div>

        {/* Recurring Schedule Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-wide uppercase mb-4 block">
            Recurring Schedule
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            Weekly Sessions for Parents & Students
          </h3>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Structured, ongoing webinars designed to empower every stakeholder in the learning journey.
          </p>
        </motion.div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recurringSchedule.map((track, idx) => (
            <motion.div
              key={track.audience}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 flex flex-col border border-border/60 relative overflow-hidden group"
            >
              {/* Accent top line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary/70" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <track.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground">
                  For {track.audience}
                </h4>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {track.description}
              </p>

              <div className="space-y-3 mb-8">
                {track.sessions.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 gold-border-left"
                  >
                    <div>
                      <span className="text-foreground font-medium text-sm block">
                        {s.day}
                      </span>
                      <span className="text-muted-foreground text-xs tabular-nums">
                        {s.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <motion.a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 border border-primary/40 text-primary font-semibold px-6 py-3 rounded-sm transition-all hover:border-primary hover:bg-primary/5 text-sm mt-auto"
              >
                {track.cta}
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebinarSection;
