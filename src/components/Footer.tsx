import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-5xl flex flex-col items-center gap-3">
        <img src={logo} alt="Aadigenx Academy Logo" className="w-12 h-12 rounded-full object-contain" />
        <span className="text-primary font-heading font-semibold tracking-tight">
          Aadigenx Academy
        </span>
        <p className="text-muted-foreground text-sm">
          Clarity. Discipline. Confidence.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
