import { LanguageProvider } from "./i18n/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Strengths from "./components/Strengths";
import Contact from "./components/Contact";
import LogoLoop from "./components/LogoLoop";

const footerLogos = [
  {
    node: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.8.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.804 2.807 1.36 3.497.287.077-.554.2-.948.402-1.155-4.2-.455-8.7-2.15-8.7-9.58 0-2.1.76-3.61 2.01-4.88-.2-.46-.87-2.31.19-4.79 0 0 1.645-.48 5.29 1.96A20.04 20.04 0 0112 6.8c1.7-.36 3.48-.57 5.23-.65 3.31 1.47 5.28 1.96 5.28 1.96.38 2.48-.29 4.31.19 4.79 1.25 1.27 2.01 2.78 2.01 4.88 0 7.08-4.48 9.2-8.72 9.58.68.56.88 1.55.88 3.15V21c0 .28.22.5.5.5H12a.5.5 0 0 0 .5-.5V12c0-5.302 3.438-9.8 8.207-11.387C23.373 2.197 18.627 0 12 0z" />
      </svg>
    ),
    title: 'GitHub',
    href: 'https://github.com/xiuyi-ctrl',
  },
  {
    node: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="M22 6L12 13L2 6" />
      </svg>
    ),
    title: 'Email',
    href: 'mailto:2998526825@qq.com',
  },
  {
    node: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v20M12 8a4 4 0 0 0-4 4" />
        <path d="M12 16a4 4 0 0 1 4-4" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: 'React Bits',
    href: 'https://www.reactbits.dev/',
  },
];

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <Header />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Strengths />
          <Contact />
        </main>
        <LogoLoop
          logos={footerLogos}
          speed={120}
          direction="left"
          logoHeight={28}
          gap={40}
          pauseOnHover
          fadeOut
          fadeOutColor="#0a0a0a"
          ariaLabel="Footer links"
        />
      </div>
    </LanguageProvider>
  );
}

export default App;
