import { motion } from "framer-motion";
import { Calendar, Clock, Sparkles, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const FORM_URL = "https://forms.gle/PdLLdrirh4gTmwr36";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gold top bar */}
      <div className="absolute top-0 left-0 right-0 h-px bg-primary" />

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Aadigenx Academy students"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium tracking-wide uppercase">
              Aadigenx Academy
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
            A Structured Path to{" "}
            <span className="text-primary">Future-Ready</span> Learning
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Data Shastra by Aadigenx Academy introduces students to patterns,
            thinking clarity, and disciplined learning.
          </p>

          {/* Event highlights */}
          <div className="flex flex-wrap gap-4 mb-10">
            {[
              { icon: Calendar, text: "Saturday, 28 March" },
              { icon: Clock, text: "5:00 PM – 7:00 PM" },
              { icon: Sparkles, text: "₹11 Token of Shagun" },
              { icon: Users, text: "Limited Seats" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                className="flex items-center gap-2 glass-card px-4 py-2 text-sm"
              >
                <item.icon className="w-4 h-4 text-primary" />
                <span className="text-foreground">{item.text}</span>
              </motion.div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-sm transition-all hover:brightness-110 gold-glow text-center"
            >
              Register Now
            </motion.a>
            <motion.a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center border border-primary/40 text-primary font-semibold px-8 py-4 rounded-sm transition-all hover:border-primary hover:bg-primary/5 text-center"
            >
              Attend Awareness Webinar
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
