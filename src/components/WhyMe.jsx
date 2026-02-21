import './WhyMe.css'

const reasons = [
  { icon: '🤝', title: 'Личный подход', desc: 'Помогу подобрать продукты именно под ваши потребности и тип кожи' },
  { icon: '🎓', title: 'Опыт и знания', desc: 'Многолетний опыт в сфере красоты, обучения и работы с людьми' },
  { icon: '💬', title: 'Всегда на связи', desc: 'Отвечу на любые вопросы и помогу с оформлением заказа' },
]

export default function WhyMe() {
  return (
    <section className="section why-me">
      <h2 className="section-title animate-on-scroll">Почему со мной?</h2>
      <p className="section-subtitle animate-on-scroll">
        Я не просто продаю — я помогаю разобраться и сделать правильный выбор
      </p>
      <div className="reasons-list">
        {reasons.map((r, i) => (
          <div key={i} className="reason-item animate-on-scroll" style={{ transitionDelay: `${i * 0.15}s` }}>
            <div className="reason-icon">{r.icon}</div>
            <div>
              <h3 className="reason-title">{r.title}</h3>
              <p className="reason-desc">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
