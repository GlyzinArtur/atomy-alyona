import './Hero.css'

const REFERRAL_URL = 'https://m.atomy.ru/gate/join/easyreg/v2/41789284'

export default function Hero() {
  return (
    <section className="hero">
      {/* Background decorative elements */}
      <div className="hero-bg-circle hero-bg-circle--1" />
      <div className="hero-bg-circle hero-bg-circle--2" />

      <nav className="hero-nav">
        <img src={`${import.meta.env.BASE_URL}images/atomy-logo-white.svg`} alt="Atomy" className="hero-nav-logo" />
        <div className="hero-nav-links">
          <a href="#about" className="nav-item">О бренде</a>
          <a href="#why" className="nav-item">Почему я</a>
          <a href="#contacts" className="nav-item">Контакты</a>
        </div>
      </nav>

      <div className="hero-content">
        <div className="hero-left">
          <span className="hero-badge">Официальный дистрибьютор Atomy</span>
          <h1 className="hero-name">Федеряшина Елена</h1>
          <p className="hero-role">Ваш персональный консультант Atomy<br />г. Великий Новгород</p>
          <p className="hero-quote">«Красота начинается с заботы о себе»</p>
          <div className="hero-buttons">
            <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer" className="cta-button">
              Начать с Atomy
            </a>
            <a href="#about" className="hero-btn-outline">Узнать больше</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">10+</span>
              <span className="hero-stat-label">лет в индустрии красоты</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-number">500+</span>
              <span className="hero-stat-label">довольных клиентов</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-photo-wrapper">
            <img src={`${import.meta.env.BASE_URL}images/alyona-hero.jpg`} alt="Алёна — консультант Atomy" className="hero-photo" />
            <div className="hero-photo-accent" />
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span>Листайте вниз</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}
