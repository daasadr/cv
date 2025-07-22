// import ContactForm from './ContactForm';

export default function Contact() {
  const contactMethods = [
    {
      label: 'Email',
      value: 'Daasa.D@seznam.cz',
      icon: '📧',
      href: 'mailto:Daasa.D@seznam.cz',
      description: 'Pošlete mi email',
    },
    {
      label: 'Telefon',
      value: '+420 773 245 222',
      icon: '📱',
      href: 'tel:+420 773 245 222',
      description: 'Zavolejte mi',
    },
    {
      label: 'GitHub',
      value: 'github.com/daasadr',
      icon: '💻',
      href: 'https://github.com/daasadr',
      description: 'Navštivte můj GitHub profil',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-white"
      aria-labelledby="contact-title"
    >
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-16">
          <h2
            id="contact-title"
            className="text-5xl font-bold text-gray-900 mb-6"
            data-macaly="contact-title"
          >
            Pojďme spolupracovat
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            data-macaly="contact-description"
          >
            Ráda se pobavím o nových projektech, kreativních myšlenkách nebo
            příležitostech být součástí vaší vize
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <section aria-labelledby="contact-methods-title">
            <h3
              id="contact-methods-title"
              className="text-3xl font-bold text-gray-900 mb-8"
            >
              Kontaktujte mě
            </h3>

            <div
              className="space-y-6"
              role="list"
              aria-label="Způsoby kontaktu"
            >
              {contactMethods.map((method) => (
                <a
                  key={method.href}
                  href={method.href}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 focus:bg-gray-100 transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    method.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  aria-describedby={`contact-${method.label.toLowerCase().replace(/\s+/g, '-')}-desc`}
                >
                  <div className="text-2xl" aria-hidden="true">
                    {method.icon}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-indigo-600 group-focus:text-indigo-600">
                      {method.label}
                    </div>
                    <div className="text-gray-600">{method.value}</div>
                  </div>
                  <span
                    id={`contact-${method.label.toLowerCase().replace(/\s+/g, '-')}-desc`}
                    className="sr-only"
                  >
                    {method.description}
                    {method.href.startsWith('http') &&
                      ' - otevře se v novém okně'}
                  </span>
                </a>
              ))}
            </div>
          </section>

          <aside aria-labelledby="why-me-title">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-100">
              <h4
                id="why-me-title"
                className="text-xl font-bold text-gray-900 mb-4"
              >
                Proč já?
              </h4>
              <ul
                className="space-y-3 text-gray-700"
                aria-label="Mé klíčové vlastnosti"
              >
                <li className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"
                    aria-hidden="true"
                  ></div>
                  <span>2 roky zkušeností s full-stack vývojem</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"
                    aria-hidden="true"
                  ></div>
                  <span>
                    Zaměření na odborný růst - ráda a hodně se vzdělávám
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"
                    aria-hidden="true"
                  ></div>
                  <span>Odbornost v moderních webových technologiích</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"
                    aria-hidden="true"
                  ></div>
                  <span>Silné zaměření na výkon a uživatelskou zkušenost</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"
                    aria-hidden="true"
                  ></div>
                  <span>Samostatnost a proaktivita</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"
                    aria-hidden="true"
                  ></div>
                  <span>Spolupracující přístup a jasná komunikace</span>
                </li>
              </ul>
            </div>
          </aside>

          {/* Contact Form */}
          {/* <ContactForm /> */}
        </div>
      </div>
    </section>
  );
}
