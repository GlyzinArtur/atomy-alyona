import './HowToStart.css'

const REFERRAL_URL = 'https://m.atomy.ru/gate/join/easyreg/v2/41789284'

const steps = [
  { num: '01', title: 'Консультация', desc: 'Свяжитесь со мной — я помогу подобрать продукты под ваши потребности' },
  { num: '02', title: 'Регистрация', desc: 'Бесплатная регистрация по моей ссылке за пару минут' },
  { num: '03', title: 'Подбор ухода', desc: 'Вместе выберем идеальную программу ухода именно для вас' },
  { num: '04', title: 'Результат', desc: 'Наслаждайтесь качественной корейской косметикой' },
]

export default function HowToStart() {
  return (
    <section className="how-section">
      <p className="section-label animate-on-scroll">Как начать</p>
      <h2 className="section-title animate-on-scroll">Четыре шага</h2>
      <div className="how-decor-line animate-on-scroll" />
      <div className="how-grid">
        {steps.map((s, i) => (
          <div key={i} className="how-step animate-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }}>
            <span className="how-num">{s.num}</span>
            <h3 className="how-step-title">{s.title}</h3>
            <p className="how-step-desc">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="how-cta animate-on-scroll">
        <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer" className="cta-button">
          Начать сейчас
        </a>
      </div>
    </section>
  )
}
