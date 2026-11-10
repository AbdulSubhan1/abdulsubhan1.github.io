import { about, caseStudies, experience, profile, projects, skills } from "@/lib/data";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 py-14 md:py-20">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-sky-400">{title}</h2>
      {children}
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{children}</span>
  );
}

const outlineBtn = "rounded-lg border border-white/15 px-4 py-2 text-sm text-white hover:bg-white/5";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-white/5 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 md:px-6">
          <a href="#top" className="font-semibold text-white">
            {profile.name}
          </a>
          <nav className="hidden gap-6 text-sm text-slate-400 md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={profile.cv}
            download
            className="rounded-lg bg-sky-500 px-3 py-1.5 text-sm font-medium text-slate-950 hover:bg-sky-400"
          >
            Download CV
          </a>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-4 md:px-6">
        <section className="py-20 md:py-32">
          <p className="mb-4 text-sm text-sky-400">{profile.location}</p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            {profile.name}
            <span className="block text-slate-400">{profile.role}</span>
          </h1>
          <p className="mt-4 font-mono text-sm text-slate-400">{profile.tagline}</p>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{profile.intro}</p>
          <p className="mt-3 text-sm text-emerald-400">● {profile.availability}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-950 hover:bg-slate-200">
              See my work
            </a>
            <a href={profile.cv} target="_blank" rel="noreferrer" className={outlineBtn}>
              View CV
            </a>
            <a href={profile.cv} download className={outlineBtn}>
              Download CV
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className={outlineBtn}>
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className={outlineBtn}>
              GitHub
            </a>
            <a href={`mailto:${profile.email}`} className={outlineBtn}>
              Email
            </a>
          </div>
        </section>

        <Section id="about" title="About">
          <div className="max-w-3xl space-y-4 text-slate-300">
            {about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Section>

        <Section id="work" title="Selected work">
          <div className="grid gap-6">
            {caseStudies.map((cs) => (
              <article key={cs.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
                <p className="text-xs uppercase tracking-wider text-slate-500">{cs.context}</p>
                <h3 className="mt-2 text-xl font-semibold text-white md:text-2xl">{cs.title}</h3>
                <p className="mt-4 text-slate-400">
                  <span className="font-medium text-slate-200">Problem: </span>
                  {cs.problem}
                </p>
                <ul className="mt-4 space-y-2 text-slate-300">
                  {cs.built.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {cs.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                  {cs.link && (
                    <a href={cs.link.href} target="_blank" rel="noreferrer" className="ml-auto text-sm text-sky-400 hover:underline">
                      {cs.link.label} ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.title} className="rounded-2xl border border-dashed border-white/15 p-6">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-3 text-slate-400">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
                {p.href && (
                  <a href={p.href} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm text-sky-400 hover:underline">
                    View project ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="space-y-8 border-l border-white/10 pl-6">
            {experience.map((e) => (
              <li key={e.company} className="relative">
                <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-sky-400" />
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="font-semibold text-white">
                    {e.role} <span className="text-slate-400">· {e.company}</span>
                  </h3>
                  <span className="text-sm text-slate-500">{e.period}</span>
                </div>
                <p className="mt-1 text-slate-400">{e.summary}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <h3 className="mb-3 font-medium text-white">{group}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-sky-500/10 to-transparent p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-white">Let&apos;s work together</h3>
            <p className="mt-2 text-slate-400">{profile.availability}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400">
                Email me
              </a>
              <a href={profile.whatsapp} target="_blank" rel="noreferrer" className={outlineBtn}>
                WhatsApp
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className={outlineBtn}>
                LinkedIn
              </a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
