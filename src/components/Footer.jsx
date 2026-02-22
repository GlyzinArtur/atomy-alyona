import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <img src={`${import.meta.env.BASE_URL}images/atomy-logo.svg`} alt="Atomy" className="footer-logo" />
      <p className="footer-copy">© {new Date().getFullYear()}</p>
    </footer>
  )
}
