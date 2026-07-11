import { useLanguage } from "../i18n/LanguageContext";
import BorderGlow from "./BorderGlow";

function Experience() {
  const { t, lang } = useLanguage();

  return (
    <section id="experience" className="py-32">
      <div className="max-w-[1700px] mx-auto px-8">
        <div className="mb-16">
          <h2 className="text-6xl md:text-7xl font-extrabold text-white/90 leading-none tracking-tight">
            {t.experience.title}
          </h2>
          <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10">
            <span className="text-xs text-red-400 tracking-wider">
              {t.experience.subtitle}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <BorderGlow colors={['#c084fc', '#f472b6', '#38bdf8']} animated={true}>
            <div className="p-8 flex items-center justify-center min-h-[320px] lg:col-span-1">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full border border-white/[0.12] flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 3.763c-.326.377-.598.796-.814 1.243a6.066 6.066 0 00-.372 1.88c-.14 1.6.384 3.11 1.24 4.24" />
                  </svg>
                </div>
                <p className="text-xl font-semibold text-white/80">
                  {lang === "en" ? "Xiuyi" : "咻咿"}
                </p>
              </div>
            </div>
          </BorderGlow>

          <BorderGlow colors={['#c084fc', '#f472b6', '#38bdf8']} animated={true}>
            <div className="p-8 md:p-10 flex flex-col justify-center lg:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white/90 leading-snug mb-6">
                {t.experience.heading}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-8">
                {t.experience.intro}
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/50">
                <a
                  href={`mailto:${t.experience.email}`}
                  className="flex items-center gap-2 hover:text-white/80 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  {t.experience.email}
                </a>
                <a
                  href="https://github.com/xiuyi-ctrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white/80 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  github.com/xiuyi-ctrl
                </a>
              </div>
            </div>
          </BorderGlow>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {t.experience.stats.map((stat) => (
            <BorderGlow key={stat.label} colors={['#c084fc', '#f472b6', '#38bdf8']} animated={false}>
              <div className="p-6">
                <p className="text-3xl md:text-4xl font-bold text-white/90">{stat.value}</p>
                <p className="text-xs text-white/40 mt-2 tracking-wide">{stat.label}</p>
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;