import './Contacts.css'

const contacts = [
  {
    label: 'Telegram',
    href: 'https://t.me/vladilena_art',
    color: '#26A5E4',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
      </svg>
    ),
  },
  {
    label: 'ВКонтакте',
    href: 'https://vk.ru/vladilena_art',
    color: '#0077FF',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.76 13.29h-1.18c-.45 0-.58-.36-1.38-1.17-.7-.67-1-.77-1.17-.77-.24 0-.3.07-.3.4v1.07c0 .28-.09.45-.83.45-1.22 0-2.58-.74-3.53-2.12C6.1 11.27 5.72 9.66 5.72 9.4c0-.17.07-.32.4-.32h1.18c.3 0 .41.14.53.46.58 1.66 1.54 3.12 1.94 3.12.15 0 .22-.07.22-.45V10.8c-.05-.76-.44-.82-.44-1.1 0-.14.12-.28.3-.28h1.86c.25 0 .34.14.34.44v2.33c0 .25.11.34.18.34.15 0 .27-.09.55-.37.85-.95 1.46-2.43 1.46-2.43.08-.17.21-.32.52-.32h1.18c.35 0 .43.18.35.44-.15.7-1.6 2.73-1.6 2.73-.13.2-.17.3 0 .53.13.17.53.53.8.85.5.58.88 1.07.99 1.41.1.33-.06.5-.4.5z"/>
      </svg>
    ),
  },
  {
    label: '+7 911 764 7971',
    href: 'tel:+79117647971',
    color: '#34C759',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
    ),
  },
]

export default function Contacts() {
  return (
    <section className="contacts">
      <p className="section-label animate-on-scroll">Связаться</p>
      <h2 className="section-title animate-on-scroll">Контакты</h2>
      <p className="section-subtitle animate-on-scroll">
        Напишите в удобный мессенджер — отвечу с удовольствием
      </p>
      <div className="contacts-grid animate-on-scroll">
        {contacts.map((c, i) => (
          <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" className="contact-card" style={{ '--accent': c.color }}>
            <div className="contact-icon-circle">
              {c.icon}
            </div>
            <span className="contact-name">{c.label}</span>
          </a>
        ))}
      </div>
      <p className="contacts-city animate-on-scroll">г. Великий Новгород</p>
    </section>
  )
}
