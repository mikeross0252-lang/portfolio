import { useState } from 'react'
import { site } from '../data/siteData.js'
import { MailIcon, WhatsAppIcon, PhoneIcon, InstagramIcon, XIcon } from './Icons.jsx'

export default function Contact() {
  const { email, whatsapp, phone, instagram, x } = site.contact
  const [notice, setNotice] = useState('')

  const handleCall = async () => {
    try {
      await navigator.clipboard.writeText(phone)
      setNotice(`Phone number copied to clipboard: ${phone}`)
    } catch {
      setNotice(`Phone number: ${phone}`)
    }
    setTimeout(() => setNotice(''), 5000)
  }

  const circle =
    'flex h-14 w-14 items-center justify-center rounded-full border border-lime/40 text-lime transition hover:bg-lime hover:text-night'
  const label = 'mt-2 text-xs text-muted'

  return (
    <section id="contact">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center md:py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-lime">Contact</p>
        <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Let's work together</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          Have a project or a job opening? Send me an email or message me on WhatsApp.
        </p>

        <a
          href={`mailto:${email}`}
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-lime px-7 py-3 font-semibold text-night transition hover:bg-lime-dark"
        >
          <MailIcon className="h-5 w-5" />
          {email}
        </a>

        <div className="mt-10 flex flex-wrap items-start justify-center gap-6">
          <div className="flex flex-col items-center">
            <a
              href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("Hi Naphtali, I saw your portfolio.")}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Message on WhatsApp"
              className={circle}
            >
              <WhatsAppIcon />
            </a>
            <span className={label}>WhatsApp</span>
          </div>

          <div className="flex flex-col items-center">
            <button onClick={handleCall} aria-label="Show phone number" className={circle}>
              <PhoneIcon />
            </button>
            <span className={label}>Call</span>
          </div>

          <div className="flex flex-col items-center">
            <a href={instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className={circle}>
              <InstagramIcon />
            </a>
            <span className={label}>Instagram</span>
          </div>

          <div className="flex flex-col items-center">
            <a href={x} target="_blank" rel="noreferrer" aria-label="X" className={circle}>
              <XIcon />
            </a>
            <span className={label}>X</span>
          </div>
        </div>

        {notice && (
          <p className="mx-auto mt-8 max-w-md rounded-lg border border-lime/40 bg-panel px-4 py-3 text-sm font-semibold text-lime">
            {notice}
          </p>
        )}
      </div>
    </section>
  )
}