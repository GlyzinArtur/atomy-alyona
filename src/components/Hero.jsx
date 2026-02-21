import './Hero.css'

const REFERRAL_URL = 'https://m.atomy.ru/gate/join/easyreg/v2/41789284'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <nav className="hero-nav">
          <span className="nav-item">Главная</span>
          <span className="nav-item">О бренде</span>
          <span className="nav-item">Контакты</span>
        </nav>
        <div className="hero-brand-vertical">
          {'ATOMY'.split('').map((char, i) => (
            <span key={i} style={{ animationDelay: `${0.1 * i}s` }}>{char}</span>
          ))}
        </div>
        <div className="hero-text-block">
          <p className="hero-quote">«Красота начинается<br />с заботы о себе»</p>
          <div className="hero-divider-line" />
          <h1 className="hero-name">Алёна</h1>
          <p className="hero-subtitle">Ваш персональный консультант Atomy</p>
          <p className="hero-city">г. Великий Новгород</p>
          <div className="hero-buttons">
            <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer" className="cta-button">
              Регистрация
            </a>
            <a href="#about" className="hero-btn-outline">Подробнее</a>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img src="/images/alyona-nobg.jpg" alt="Алёна — консультант Atomy" className="hero-photo" />
      </div>
    </section>
  )
}
