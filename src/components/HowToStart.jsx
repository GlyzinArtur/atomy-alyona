import './HowToStart.css'

const REFERRAL_URL = 'https://m.atomy.ru/gate/join/easyreg/v2/41789284'

const steps = [
  { num: '01', icon: '📝', title: 'Зарегистрируйтесь', desc: 'Бесплатная регистрация по моей ссылке — занимает пару минут' },
  { num: '02', icon: '🛍️', title: 'Выберите продукты', desc: 'Я помогу подобрать идеальный уход именно для вас' },
  { num: '03', icon: '📦', title: 'Получите заказ', desc: 'Быстрая доставка прямо к вашей двери' },
]

export default function HowToStart() {
  return (
    <section className="section how-to-start">
      <h2 className="section-title animate-on-scroll">Как начать?</h2>
      <p className="section-subtitle animate-on-scroll">Всего три простых шага</p>
      <div className="steps-grid">
        {steps.map((s, i) => (
          <div key={i} className="step-card glass-card animate-on-scroll" style={{ transitionDelay: `${i * 0.15}s` }}>
            <div className="step-num">{s.num}</div>
            <div className="step-icon">{s.icon}</div>
            <h3 className="step-title">{s.title}</h3>
            <p className="step-desc">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="how-cta animate-on-scroll">
        <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer" className="cta-button">
          Начать сейчас →
        </a>
      </div>
    </section>
  )
}
