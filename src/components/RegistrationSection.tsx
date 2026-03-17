import { motion } from "framer-motion";
import { QrCode } from "lucide-react";
import qrImage from "@/assets/webinar-qr.png";

const FORM_URL = "https://forms.gle/PdLLdrirh4gTmwr36";

const RegistrationSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
            {/* Text side */}
            <div className="md:col-span-3">
              <span className="text-primary text-sm font-medium tracking-wide uppercase mb-4 block">
                Take the Next Step
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Register for Data Shastra
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Secure your place in a structured and future-focused learning
                program. Limited seats available.
              </p>
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
            </div>

            {/* QR side */}
            <div className="md:col-span-2 flex flex-col items-center">
              <div className="w-44 h-44 rounded-xl border-2 border-dashed border-primary/40 flex items-center justify-center bg-secondary/30 overflow-hidden">
                <img
                  src={qrImage}
                  alt="Scan to register"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex items-center gap-2 mt-4 text-muted-foreground text-sm">
                <QrCode className="w-4 h-4 text-primary" />
                <span>Scan to Register</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationSection;
