import { motion } from "framer-motion";
import { Calendar, Clock, Sparkles } from "lucide-react";

const FORM_URL = "https://forms.gle/PdLLdrirh4gTmwr36";

const WebinarSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 text-center"
        >
          <span className="text-primary text-sm font-medium tracking-wide uppercase mb-4 block">
            Entry Point
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
      </div>
    </section>
  );
};

export default WebinarSection;
