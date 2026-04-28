import { motion } from "framer-motion";
import { Calendar, Clock, Sparkles, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import logo from "@/assets/logo.png";

const FORM_URL = "https://forms.gle/PdLLdrirh4gTmwr36";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Gold top bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary z-20" />

      {/* Academy branding bar */}
      <div className="relative z-20 flex items-center justify-center pt-8 pb-4 px-6">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary tracking-tight">
          Aadigenx Academy
        </h2>
      </div>

      {/* Hero image — fully visible, no overlays on the kids */}
      <div className="relative w-full">
        <img
          src={heroBg}
          alt="Aadigenx Academy students"
          className="w-full h-auto object-contain"
        />
        {/* Only a subtle bottom fade into the dark background */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content below the image */}
      <div className="relative z-10 container mx-auto px-6 py-12 md:py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium tracking-wide uppercase">
              Data Shastra Program
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
            A Structured Path to{" "}
            <span className="text-primary">Future-Ready</span> Learning
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
            Data Shastra by Aadigenx Academy introduces students to patterns,
            thinking clarity, and disciplined learning.
          </p>

          {/* Event highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { icon: Calendar, text: "Saturday, 28 March" },
              { icon: Clock, text: "5:00 PM – 5:45 PM" },
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
          <div className="flex flex-col sm:flex-row justify-center gap-4">
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
              href="https://www.aadigenix.com/aadian"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center border border-primary/40 text-primary font-semibold px-8 py-4 rounded-sm transition-all hover:border-primary hover:bg-primary/5 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] text-center"
            >
              Visit Our Website
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
