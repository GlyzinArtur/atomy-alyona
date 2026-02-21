import './Hero.css'

const REFERRAL_URL = 'https://m.atomy.ru/gate/join/easyreg/v2/41789284'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />

      <div className="hero-content">
        <img src="/images/atomy-logo.svg" alt="Atomy" className="hero-logo animate-fade-in" />

        <div className="hero-main animate-slide-up delay-1">
          <div className="hero-photo-col">
            <div className="hero-photo-wrapper">
              <img src="/images/alyona-hero.jpg" alt="Алёна — консультант Atomy" className="hero-photo" />
            </div>
          </div>
          <div className="hero-text-col">
            <h1 className="hero-name">Алёна</h1>
            <p className="hero-role">Ваш персональный консультант</p>
            <p className="hero-city">Великий Новгород</p>
            <div className="hero-divider" />
            <p className="hero-tagline">Подберу идеальный уход именно для вас</p>
            <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer" className="cta-button">
              Зарегистрироваться бесплатно
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
