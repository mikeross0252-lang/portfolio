import { site } from '../data/siteData.js'

export default function Projects() {
  return (
    <section id="projects" className="bg-panel">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-lime">Projects</p>
        <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Featured work</h2>
        <p className="mt-2 max-w-2xl text-muted">
          Demo projects I built to show what I can do. Open any live demo and try it yourself.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {site.projects.map((p) => (
            <article
              key={p.title}
              className="overflow-hidden rounded-xl border border-white/10 bg-night transition hover:-translate-y-1 hover:border-lime/60"
            >
              <div className="aspect-video overflow-hidden bg-black/30">
                <img
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <span className="rounded-full bg-lime/15 px-3 py-1 text-xs font-semibold text-lime">
                    Demo
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted">{p.description}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full bg-panel px-3 py-1 text-xs text-muted">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-5 text-sm font-semibold">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="text-lime hover:underline">
                      Live demo →
                    </a>
                  )}
                  {p.code && (
                    <a href={p.code} target="_blank" rel="noreferrer" className="text-muted hover:text-text">
                      Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}