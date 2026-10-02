import { site } from '../data/siteData.js'

export default function Skills() {
  return (
    <section id="skills">
      <div className="mx-auto max-w-4xl px-4 py-16 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-lime">Skills</p>
        <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">What I work with</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {site.skills.map((s) => (
            <span
              key={s}
              className="rounded-full border border-lime/40 bg-panel px-5 py-2 text-sm font-medium transition hover:border-lime hover:text-lime"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}