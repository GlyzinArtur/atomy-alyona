import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <p>Сайт создан с ❤️ для Алёны</p>
      <p className="footer-year">© {new Date().getFullYear()}</p>
    </footer>
  )
}
