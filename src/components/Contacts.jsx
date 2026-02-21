import './Contacts.css'

const contacts = [
  { icon: '✈️', label: 'Telegram', href: 'https://t.me/vladilena_art' },
  { icon: '🔵', label: 'ВКонтакте', href: 'https://vk.ru/vladilena_art' },
  { icon: '📞', label: '+7 911 764 7971', href: 'tel:+79117647971' },
]

export default function Contacts() {
  return (
    <section className="section contacts">
      <p className="section-label animate-on-scroll">Связаться</p>
      <h2 className="section-title animate-on-scroll">Контакты</h2>
      <p className="section-subtitle animate-on-scroll">
        Напишите в любой удобный мессенджер — отвечу с удовольствием
      </p>
      <div className="contacts-row animate-on-scroll">
        {contacts.map((c, i) => (
          <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" className="contact-item">
            <span className="contact-icon">{c.icon}</span>
            <span className="contact-label">{c.label}</span>
          </a>
        ))}
      </div>
      <p className="contacts-city animate-on-scroll">г. Великий Новгород</p>
    </section>
  )
}
