import './AboutAtomy.css'

const features = [
  { icon: '🇰🇷', title: 'Южная Корея', desc: 'Передовые технологии красоты и здоровья' },
  { icon: '💎', title: 'Абсолютное качество', desc: 'Продукция мирового уровня по строгим стандартам' },
  { icon: '💰', title: 'Честные цены', desc: 'Без наценок — напрямую от производителя' },
  { icon: '🌍', title: '26+ стран', desc: 'Глобальный бренд с мировым признанием' },
]

export default function AboutAtomy() {
  return (
    <section className="section about" id="about">
      <div className="about-header animate-on-scroll">
        <img src="/images/atomy-logo.svg" alt="Atomy" className="about-logo" />
        <h2 className="section-title">Мировой бренд из Южной Кореи</h2>
        <p className="section-subtitle">
          Премиальная косметика, здоровье и товары для дома
        </p>
      </div>

      <div className="product-banner animate-on-scroll">
        <img src="/images/ru-banner-1.png" alt="Atomy — набор продукции" className="banner-img" />
      </div>

      <div className="product-grid animate-on-scroll">
        <div className="product-card">
          <img src="/images/product-3.png" alt="Atomy The Fame Set" />
          <span>Уход за кожей</span>
        </div>
        <div className="product-card">
          <img src="/images/ru-prod-1.png" alt="Atomy Evening Care" />
          <span>Вечерний уход</span>
        </div>
        <div className="product-card">
          <img src="/images/ru-banner-3.png" alt="Atomy Dental Sonic" />
          <span>Забота о здоровье</span>
        </div>
        <div className="product-card">
          <img src="/images/product-5.png" alt="Atomy Café" />
          <span>Кофе и еда</span>
        </div>
      </div>

      <div className="features-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-card animate-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="feature-icon">{f.icon}</div>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
