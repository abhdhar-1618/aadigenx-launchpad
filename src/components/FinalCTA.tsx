import { motion } from "framer-motion";

const FORM_URL = "https://forms.gle/PdLLdrirh4gTmwr36";

const FinalCTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            A strong academic journey begins with the right foundation.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-10 py-4 rounded-sm transition-all hover:brightness-110 gold-glow"
            >
              Register Now
            </motion.a>
            <motion.a
              href="https://www.aadigenix.com/aadian"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center border border-primary/40 text-primary font-semibold px-10 py-4 rounded-sm transition-all hover:border-primary hover:bg-primary/5"
            >
              Visit Our Website
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
