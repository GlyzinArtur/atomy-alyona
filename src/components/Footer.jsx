import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <img src="/images/atomy-logo.svg" alt="Atomy" className="footer-logo" />
      <p className="footer-copy">© {new Date().getFullYear()} · Алёна — консультант Atomy</p>
    </footer>
  )
}
