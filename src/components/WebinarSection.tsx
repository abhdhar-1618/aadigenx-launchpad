import { motion } from "framer-motion";
import { Calendar, Clock, Sparkles, Users, GraduationCap, ArrowRight, BookOpen, Brain, MessageSquare, Table, Code, Database, BarChart3, Cpu, FlaskConical } from "lucide-react";

const FORM_URL = "https://forms.gle/PdLLdrirh4gTmwr36";

const parentTopics = [
  { icon: BookOpen, label: "LLM Notebooks", detail: "Hands-on understanding" },
  { icon: MessageSquare, label: "ChatGPT", detail: "Practical usage for daily learning support" },
  { icon: Brain, label: "Prompt Engineering", detail: "How to ask the right questions" },
];

const studentGrades6to8 = [
  { icon: Table, label: "Microsoft Excel", detail: "Foundations" },
  { icon: Code, label: "Python", detail: "Google Colab" },
  { icon: Database, label: "SQL", detail: "MySQL / SQLite basics" },
  { icon: BarChart3, label: "Microsoft Power BI", detail: "Intro to dashboards" },
];

const studentGrades9to12 = [
  { icon: Database, label: "Advanced SQL" },
  { icon: BarChart3, label: "Advanced Power BI" },
  { icon: Code, label: "Python", detail: "Google Colab" },
  { icon: FlaskConical, label: "Pandas", detail: "Data analysis" },
  { icon: Cpu, label: "Scikit-learn", detail: "Intro to ML" },
  { icon: Brain, label: "OpenAI / LLM APIs", detail: "Real-world AI applications" },
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
          {/* Parents Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 flex flex-col border border-border/60 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary/70" />

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground">For Parents</h4>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Equip yourself to guide your child with clarity using modern AI tools and structured thinking approaches.
            </p>

            <div className="space-y-3 mb-6">
              {parentTopics.map((topic, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <topic.icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div>
                    <span className="text-foreground font-medium text-sm">{topic.label}</span>
                    <span className="text-muted-foreground text-xs block">{topic.detail}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="gold-border-left mb-8">
              <span className="text-foreground font-medium text-sm block">1st & 3rd Saturday of every month</span>
              <span className="text-muted-foreground text-xs tabular-nums">5:00 PM – 5:45 PM</span>
            </div>

            <motion.a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 border border-primary/40 text-primary font-semibold px-6 py-3 rounded-sm transition-all hover:border-primary hover:bg-primary/5 text-sm mt-auto"
            >
              Learn AI for Parenting
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Students Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-8 flex flex-col border border-border/60 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary/70" />

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground">For Students</h4>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              A structured, grade-wise pathway to build analytical thinking, data skills, and real-world problem-solving.
            </p>

            {/* Grades 6–8 */}
            <div className="mb-5">
              <span className="text-primary text-xs font-semibold tracking-wider uppercase mb-2.5 block">Grades 6–8</span>
              <div className="space-y-2">
                {studentGrades6to8.map((topic, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <topic.icon className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <span className="text-foreground font-medium text-sm">{topic.label}</span>
                      {topic.detail && <span className="text-muted-foreground text-xs block">{topic.detail}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border/40 my-4" />

            {/* Grades 9–12 */}
            <div className="mb-6">
              <span className="text-primary text-xs font-semibold tracking-wider uppercase mb-2.5 block">Grades 9–12</span>
              <div className="space-y-2">
                {studentGrades9to12.map((topic, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <topic.icon className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <span className="text-foreground font-medium text-sm">{topic.label}</span>
                      {topic.detail && <span className="text-muted-foreground text-xs block">{topic.detail}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="gold-border-left mb-8">
              <span className="text-foreground font-medium text-sm block">2nd & 4th Saturday of every month</span>
              <span className="text-muted-foreground text-xs tabular-nums">5:00 PM – 5:45 PM</span>
            </div>

            <motion.a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 border border-primary/40 text-primary font-semibold px-6 py-3 rounded-sm transition-all hover:border-primary hover:bg-primary/5 text-sm mt-auto"
            >
              Explore Student Pathway
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WebinarSection;
