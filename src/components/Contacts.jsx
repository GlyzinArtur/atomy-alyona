import './Contacts.css'

const contacts = [
  { icon: '✈️', label: 'Telegram', href: 'https://t.me/vladilena_art', color: '#26A5E4' },
  { icon: '🔵', label: 'ВКонтакте', href: 'https://vk.ru/vladilena_art', color: '#0077FF' },
  { icon: '📞', label: '+7 911 764 7971', href: 'tel:+79117647971', color: '#4CAF50' },
]

export default function Contacts() {
  return (
    <section className="section contacts">
      <h2 className="section-title animate-on-scroll">Свяжитесь со мной</h2>
      <p className="section-subtitle animate-on-scroll">
        Пишите в любой удобный мессенджер — отвечу с удовольствием!
      </p>
      <div className="contacts-grid animate-on-scroll">
        {contacts.map((c, i) => (
          <a
            key={i}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card glass-card"
            style={{ '--accent': c.color }}
          >
            <span className="contact-icon">{c.icon}</span>
            <span className="contact-label">{c.label}</span>
          </a>
        ))}
      </div>
      <p className="contacts-city animate-on-scroll">📍 Великий Новгород</p>
    </section>
  )
}
