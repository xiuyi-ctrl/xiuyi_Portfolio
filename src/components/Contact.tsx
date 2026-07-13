import { useLanguage } from "../i18n/LanguageContext";
import Particles from "./Particles";
import LogoLoop from "./LogoLoop";

const showCopiedToast = () => {
  const msg = document.createElement('div');
  msg.textContent = '邮箱已复制';
  msg.style.cssText = 'position:fixed;left:50%;transform:translateX(-50%);bottom:20px;padding:8px 16px;background:rgba(192,132,252,0.9);color:white;border-radius:4px;font-size:14px;z-index:9999;opacity:0;transition:opacity 0.3s ease';
  document.body.appendChild(msg);
  requestAnimationFrame(() => { msg.style.opacity = '1'; });
  setTimeout(() => {
    msg.style.opacity = '0';
    setTimeout(() => document.body.removeChild(msg), 300);
  }, 2000);
};

const footerLogos = [
  {
    node: (
      <img src="/github.svg" alt="GitHub" style={{ width: 24, height: 24, display: 'block' }} />
    ),
    title: 'GitHub',
    href: 'https://github.com/xiuyi-ctrl',
  },
  {
    node: (
      <div
        onClick={(e) => {
          e.preventDefault();
          navigator.clipboard.writeText('2998526825@qq.com');
          showCopiedToast();
        }}
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24 }}
      >
        <img src="/email.svg" alt="Email" style={{ width: 24, height: 24, display: 'block' }} />
      </div>
    ),
    title: 'Email',
    href: '#',
  },
  {
    node: (
      <img src="/react.svg" alt="React Bits" style={{ width: 24, height: 24, display: 'block' }} />
    ),
    title: 'React Bits',
    href: 'https://www.reactbits.dev/',
  },
];

function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Particles
        particleCount={200}
        particleSpread={20}
        speed={0.1}
        particleColors={['#c084fc', '#f472b6', '#38bdf8', '#a855f7', '#ec4899', '#0ea5e9', '#ffffff']}
        particleBaseSize={80}
        sizeRandomness={1}
        cameraDistance={25}
        particleHoverFactor={1.8}
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

          <div className="flex flex-col items-center gap-6 mt-12">
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => {
                  navigator.clipboard.writeText('2998526825@qq.com');
                  showCopiedToast();
                }}
                className="px-8 py-3 bg-white text-black text-sm font-medium hover:bg-white/90 transition-all duration-300 tracking-wide cursor-pointer"
              >
                {t.contact.emailLabel}
              </button>
              <a
                href="https://github.com/xiuyi-ctrl"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-white/20 text-white/70 hover:border-white/50 transition-all duration-300 text-sm tracking-wide"
              >
                {t.contact.github}
              </a>
            </div>

            <div className="w-full max-w-[280px]">
              <LogoLoop
                logos={footerLogos}
                speed={120}
                direction="left"
                logoHeight={24}
                gap={32}
                pauseOnHover
                fadeOut
                fadeOutColor="#0a0a0a"
                ariaLabel="Footer links"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;