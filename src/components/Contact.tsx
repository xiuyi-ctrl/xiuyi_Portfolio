import { useLanguage } from "../i18n/LanguageContext";
import Particles from "./Particles";

function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Particles
        particleCount={100}
        particleSpread={15}
        speed={0.06}
        particleColors={['#c084fc', '#f472b6', '#38bdf8']}
        particleBaseSize={30}
        sizeRandomness={0.6}
        cameraDistance={25}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(120,80,255,0.06)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-[1700px] mx-auto px-8 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs text-white/30 tracking-[0.3em] uppercase">
            Contact
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
            <span className="text-white/90">{t.contact.title}</span>
            <br />
            <span className="bg-gradient-to-r from-white via-white/70 to-white/30 bg-clip-text text-transparent">
              {t.contact.highlight}
            </span>
          </h2>
          <p className="text-base text-white/40 mt-6 max-w-xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <a
              href={`mailto:${t.contact.email}`}
              className="px-8 py-3 bg-white text-black text-sm font-medium hover:bg-white/90 transition-all duration-300 tracking-wide"
            >
              {t.contact.emailLabel}
            </a>
            <a
              href="https://github.com/xiuyi-ctrl"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-white/20 text-white/70 hover:border-white/50 transition-all duration-300 text-sm tracking-wide"
            >
              {t.contact.github}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
