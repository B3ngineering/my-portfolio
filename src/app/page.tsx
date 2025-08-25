import Image from "next/image";
import Link from "next/link";
import { personalInfo, skills } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-terminal-50 via-black to-terminal-100 py-20 sm:py-32 overflow-hidden">
        {/* Matrix rain effect background */}
        <div className="absolute inset-0 opacity-10">
          <div className="matrix-rain text-matrix-400 text-xs font-share-tech-mono">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute animate-matrix-rain"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              >
                01010101
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold text-matrix-400 leading-tight mb-2">
                <span className="inline-block animate-glitch">&gt;</span> HELLO_WORLD
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-orbitron font-bold text-green-300 mb-4">
                I_AM_{" "}
                <span className="text-matrix-400 animate-terminal-blink">{personalInfo.name.toUpperCase().replace(' ', '_')}</span>
              </h2>
              <p className="mt-4 text-xl sm:text-2xl text-green-300 font-share-tech-mono">
                [{personalInfo.title.toUpperCase()}]
              </p>
              <div className="mt-6 text-lg text-green-200 leading-relaxed max-w-2xl font-jetbrains-mono border-l-2 border-matrix-400 pl-4">
                <span className="text-matrix-400">&gt;&gt;&gt;</span> {personalInfo.bio}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/professional"
                  className="inline-flex items-center px-6 py-3 border-2 border-matrix-400 text-base font-bold font-share-tech-mono text-matrix-400 bg-black hover:bg-matrix-400 hover:text-black transition-all duration-300 shadow-matrix"
                >
                  <span className="mr-2">&gt;</span> VIEW_WORK.LOG
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 border-2 border-green-300 text-base font-bold font-share-tech-mono text-green-300 bg-black hover:bg-green-300 hover:text-black transition-all duration-300"
                >
                  <span className="mr-2">&gt;</span> ABOUT_ME.PARAM
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:ml-8">
              <div className="relative mx-auto w-64 h-64 lg:w-80 lg:h-80">
                {personalInfo.profileImage ? (
                  <Image
                    src={personalInfo.profileImage}
                    alt={`${personalInfo.name} profile photo`}
                    fill
                    className="rounded object-cover shadow-matrix border-2 border-matrix-400 filter brightness-110 contrast-125"
                    sizes="(max-width: 768px) 256px, 320px"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-black border-2 border-matrix-400 flex items-center justify-center shadow-matrix">
                    <div className="text-center">
                      <div className="text-matrix-400 text-6xl lg:text-8xl font-orbitron font-bold mb-2">
                        {personalInfo.name.split(' ').map((n: string) => n[0]).join('')}
                      </div>
                      <div className="text-green-300 font-share-tech-mono text-sm">
                        [USER_AVATAR]
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Skills Overview */}
      <section className="py-16 sm:py-20 bg-terminal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-orbitron font-bold text-matrix-400 mb-4">
              <span className="text-green-300">[</span>TECHNICAL_SKILLS<span className="text-green-300">]</span>
            </h2>
            <div className="text-green-300 font-share-tech-mono">
              &gt; Loading modules...
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border-2 border-matrix-400 p-6 shadow-terminal hover:shadow-matrix transition-all duration-300">
              <h3 className="text-lg font-orbitron font-semibold text-matrix-400 mb-4">
                &gt; LANGUAGES.CONFIG
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="inline-block bg-terminal-100 border border-green-400 text-green-400 text-sm px-3 py-1 font-jetbrains-mono hover:bg-green-400 hover:text-black transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-black border-2 border-matrix-400 p-6 shadow-terminal hover:shadow-matrix transition-all duration-300">
              <h3 className="text-lg font-orbitron font-semibold text-matrix-400 mb-4">
                &gt; LIBRARIES.LIB
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.libraries.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="inline-block bg-terminal-100 border border-green-400 text-green-400 text-sm px-3 py-1 font-jetbrains-mono hover:bg-green-400 hover:text-black transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-black border-2 border-matrix-400 p-6 shadow-terminal hover:shadow-matrix transition-all duration-300">
              <h3 className="text-lg font-orbitron font-semibold text-matrix-400 mb-4">
                &gt; FRAMEWORKS.FW
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="inline-block bg-terminal-100 border border-green-400 text-green-400 text-sm px-3 py-1 font-jetbrains-mono hover:bg-green-400 hover:text-black transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-black border-2 border-matrix-400 p-6 shadow-terminal hover:shadow-matrix transition-all duration-300">
              <h3 className="text-lg font-orbitron font-semibold text-matrix-400 mb-4">
                &gt; TOOLS.SYS
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="inline-block bg-terminal-100 border border-green-400 text-green-400 text-sm px-3 py-1 font-jetbrains-mono hover:bg-green-400 hover:text-black transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-16 sm:py-20 bg-black border-t-2 border-matrix-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-orbitron font-bold text-matrix-400 mb-8">
            <span className="text-green-300">[</span>ESTABLISH_CONNECTION<span className="text-green-300">]</span>
          </h2>
          <div className="text-green-300 font-share-tech-mono mb-8">
            &gt; Initializing secure communication protocol...
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center px-6 py-3 border-2 border-matrix-400 text-base font-bold font-share-tech-mono text-matrix-400 bg-black hover:bg-matrix-400 hover:text-black transition-all duration-300 shadow-matrix group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              SEND_EMAIL.EXE
            </a>
            {personalInfo.linkedin && (
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-green-300 text-base font-bold font-share-tech-mono text-green-300 bg-black hover:bg-green-300 hover:text-black transition-all duration-300 group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
                LINKEDIN.COM
              </a>
            )}
          </div>
          <div className="mt-8 text-green-400 font-jetbrains-mono text-sm">
            &gt; Connection established. Awaiting input...
            <span className="animate-terminal-blink">_</span>
          </div>
        </div>
      </section>
    </div>
  );
}
