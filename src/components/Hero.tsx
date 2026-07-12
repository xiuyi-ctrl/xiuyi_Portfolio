import { useLanguage } from "../i18n/LanguageContext";
import Hyperspeed from "./Hyperspeed";
import ShinyText from "./ShinyText";
import RotatingText from "./RotatingText";

const hyperspeedOptions: any = {
  distortion: "turbulentDistortion",
  length: 400,
  roadWidth: 10,
  islandWidth: 2,
  lanesPerRoad: 4,
  fov: 90,
  fovSpeedUp: 150,
  speedUp: 2,
  carLightsFade: 0.4,
  totalSideLightSticks: 20,
  lightPairsPerRoadWay: 40,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5],
  lightStickHeight: [1.3, 1.7],
  movingAwaySpeed: [60, 80],
  movingCloserSpeed: [-120, -160],
  carLightsLength: [12, 80],
  carLightsRadius: [0.05, 0.14],
  carWidthPercentage: [0.3, 0.5],
  carShiftX: [-0.8, 0.8],
  carFloorSeparation: [0, 5],
  colors: {
    roadColor: 526344,
    islandColor: 657930,
    background: 0,
    shoulderLines: 1250072,
    brokenLines: 1250072,
    leftCars: [14177983, 6770850, 12732332],
    rightCars: [242627, 941733, 3294549],
    sticks: 242627,
  },
}

const rotatingTexts = [
  "个人作品集",
  "Vibe Coding"
];

function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Hyperspeed effectOptions={hyperspeedOptions} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10" />
      <div className="relative z-20 max-w-[1700px] mx-auto px-8 text-center">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/[0.02]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 animate-pulse" />
          <span className="text-xs text-white/40 tracking-widest uppercase">
            {lang === "en" ? "Open for opportunities" : "开放合作"}
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-[7rem] font-bold leading-[1.1] tracking-tight mt-16 flex items-center justify-center gap-4">
          <ShinyText 
            className="text-white/90"
            speed={3}
            color="#ffffff"
            shineColor="#c084fc"
            spread={120}
          >
            {t.hero.greeting}
          </ShinyText>
          <RotatingText
            texts={rotatingTexts}
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300/20 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg border border-cyan-400/30"
            rotationInterval={2000}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
          />
        </h1>
        <p className="mt-6 text-base text-white/40 max-w-xl mx-auto leading-relaxed tracking-wide">
          {t.hero.subtitle}
        </p>
        <div className="mt-10 flex items-center justify-center gap-6">
          <a
            href="#contact"
            className="px-8 py-3 bg-white text-black text-sm font-medium hover:bg-white/90 transition-all duration-300 tracking-wide"
          >
            {t.hero.cta}
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border border-white/20 text-white/70 hover:border-white/50 transition-all duration-300 text-sm tracking-wide"
          >
            {lang === "en" ? "View Projects" : "查看项目"}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;