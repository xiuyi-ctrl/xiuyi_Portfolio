import { projects } from "../data/projects";
import { useLanguage } from "../i18n/LanguageContext";
import Particles from "./Particles";

function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-32 relative">
      <Particles particleCount={40} particleSpread={6} speed={0.04} particleColors={['#38bdf8', '#c084fc']} particleBaseSize={20} sizeRandomness={0.4} cameraDistance={12} />
      <div className="max-w-[1700px] mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-xs text-white/30 tracking-[0.3em] uppercase">
            {t.projects.title}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white/90">
            {t.projects.subtitle}
          </h2>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center border-t border-white/[0.04] pt-12"
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <div className="aspect-[16/10] bg-white/[0.02] border border-white/[0.06] flex items-center justify-center p-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="text-[10px] text-white/20 tracking-[0.3em] uppercase">
                  {String(project.id).padStart(2, "0")}
                </span>
                <h3 className="text-2xl font-bold text-white/90 mt-2">{project.title}</h3>
                <p className="text-sm text-white/40 mt-4 leading-relaxed">
                  {project.descriptionZh}
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[11px] text-white/30 border border-white/[0.08] tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 text-sm text-white/50 hover:text-white transition-colors tracking-wide"
                  >
                    查看项目 →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;