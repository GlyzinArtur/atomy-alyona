import './WhyMe.css'

const advantages = [
  'Личный подход',
  'Бесплатная консультация',
  'Опыт в обучении и работе с людьми',
  'Помощь с выбором и оформлением',
]

export default function WhyMe() {
  return (
    <section className="whyme" id="why">
      <div className="whyme-inner">
        <div className="whyme-text animate-on-scroll">
          <p className="section-label">Преимущества</p>
          <h2 className="whyme-heading">Почему<br />выбирают меня</h2>
          <div className="whyme-list">
            {advantages.map((a, i) => (
              <div key={i} className="whyme-item">
                <div className="whyme-line" />
                <span>{a}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="whyme-photo-col animate-on-scroll">
          <img src={`${import.meta.env.BASE_URL}images/alyona-office.jpg`} alt="Алёна за работой" className="whyme-photo" />
        </div>
      </div>
    </section>
  )
}
