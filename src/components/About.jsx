import { site } from '../data/siteData.js'

export default function About() {
  return (
    <section id="about" className="bg-panel">
      <div className="mx-auto max-w-4xl px-4 py-16 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-lime">About me</p>
        <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
          Driven by structure, discipline, and execution
        </h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
          {site.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}