import { site } from '../data/siteData.js'

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
      <div className="order-2 md:order-1">
        <p className="text-sm font-semibold uppercase tracking-widest text-lime">{site.location}</p>
        <h1 className="mt-3 font-display text-5xl font-bold leading-tight md:text-6xl">
          Hi, I'm {site.shortName}.
        </h1>
        <p className="mt-2 font-display text-xl font-semibold text-lime md:text-2xl">{site.title}</p>
        <p className="mt-5 max-w-lg text-lg text-muted">{site.intro}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-full bg-lime px-7 py-3 font-semibold text-night transition hover:bg-lime-dark"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-lime px-7 py-3 font-semibold text-lime transition hover:bg-lime hover:text-night"
          >
            Contact me
          </a>
        </div>
      </div>

      <div className="order-1 mx-auto w-56 md:order-2 md:w-80">
        <img
          src={site.photo}
          alt={site.name}
          className="aspect-square w-full rounded-full border-4 border-lime object-cover"
        />
      </div>
    </section>
  )
}