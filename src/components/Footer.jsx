import { site } from '../data/siteData.js'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-muted">
      <p>© {new Date().getFullYear()} {site.name}. Built with React and Tailwind CSS.</p>
    </footer>
  )
}