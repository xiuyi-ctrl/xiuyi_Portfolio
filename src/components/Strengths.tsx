import type { ReactNode } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import Particles from "./Particles";

const iconMap: Record<string, ReactNode> = {
  code: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  server: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z" />
    </svg>
  ),
  design: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 3.763c-.326.377-.598.796-.814 1.243a6.066 6.066 0 00-.372 1.88c-.14 1.6.384 3.11 1.24 4.24" />
    </svg>
  ),
  zap: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
};

function Strengths() {
  const { t } = useLanguage();

  return (
    <section id="strengths" className="py-32 relative">
      <Particles
        particleCount={60}
        particleSpread={8}
        speed={0.08}
        particleColors={['#c084fc', '#f472b6', '#38bdf8']}
        particleBaseSize={25}
        sizeRandomness={0.5}
        cameraDistance={15}
      />
      <div className="max-w-[1700px] mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-xs text-white/30 tracking-[0.3em] uppercase">
            {t.strengths.title}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white/90">
            {t.strengths.subtitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.strengths.items.map((item) => (
            <div key={item.title} className="group p-8 border border-white/[0.04] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500">
              <div className="w-10 h-10 flex items-center justify-center border border-white/[0.06] text-white/60 mb-6">
                {iconMap[item.icon] || null}
              </div>
              <h3 className="text-lg font-semibold text-white/90">{item.title}</h3>
              <p className="text-sm text-white/40 mt-3 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Strengths;
