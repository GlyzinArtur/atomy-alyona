import './AboutAtomy.css'

const values = [
  { num: '01', title: 'Абсолютное качество', desc: 'Продукция мирового уровня по строгим стандартам Южной Кореи' },
  { num: '02', title: 'Доступные цены', desc: 'Без наценок посредников — напрямую от производителя' },
  { num: '03', title: 'Натуральный состав', desc: 'Безопасные ингредиенты, проверенные дерматологами' },
  { num: '04', title: 'Мировой бренд', desc: '26+ стран, миллионы довольных клиентов по всему миру' },
]

export default function AboutAtomy() {
  return (
    <section className="about" id="about">
      <div className="about-header animate-on-scroll">
        <p className="section-label">О бренде</p>
        <h2 className="section-title">Atomy</h2>
        <div className="about-decor-line" />
      </div>

      <div className="about-intro animate-on-scroll">
        <div className="about-photo-col">
          <div className="about-photo-frame">
            <img src={`${import.meta.env.BASE_URL}images/alyona-consultation.jpg`} alt="Алёна" className="about-photo" />
          </div>
        </div>
        <div className="about-text-col">
          <p className="about-question">Готовы узнать<br />что такое Atomy?</p>
          <p className="about-desc"><strong>Atomy</strong> — глобальный бренд из Южной Кореи, который объединяет премиальное качество и доступные цены. Косметика, здоровье, товары для дома — всё, что нужно для заботы о себе.</p>
          <p className="about-desc">Компания присутствует в более чем 26 странах мира и продолжает расти, привлекая миллионы клиентов качеством своей продукции.</p>
        </div>
      </div>

      <div className="about-banner animate-on-scroll">
        <img src={`${import.meta.env.BASE_URL}images/ru-banner-1.png`} alt="Atomy — набор продукции" className="about-banner-img" />
      </div>

      <div className="values-grid">
        {values.map((v, i) => (
          <div key={i} className="value-item animate-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }}>
            <span className="value-num">{v.num}</span>
            <div>
              <h3 className="value-title">{v.title}</h3>
              <p className="value-desc">{v.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
