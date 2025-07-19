// import ContactForm from './ContactForm';

export default function Contact() {
  console.log('Kontaktní komponenta vykreslena');

  const contactMethods = [
    {
      label: 'Email',
      value: '<EMAIL>',
      icon: '📧',
      href: 'mailto:<EMAIL>'
    },
    {
      label: 'Telefon',
      value: '<PHONE>',
      icon: '📱',
      href: 'tel:<PHONE>'
    },
    {
      label: 'GitHub',
      value: 'github.com/<GITHUB>',
      icon: '💻',
      href: 'https://github.com/<GITHUB>'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-5xl font-bold text-gray-900 mb-6"
            data-macaly="contact-title"
          >
            Pojďme spolupracovat
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            data-macaly="contact-description"
          >
            Ráda se pobavím o nových projektech, kreativních myšlenkách nebo příležitostech být součástí vaší vize
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Kontaktujte mě
            </h3>
            
            <div className="space-y-6 mb-10">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 group"
                >
                  <div className="text-2xl">{method.icon}</div>
                  <div>
                    <div className="font-medium text-gray-900 group-hover:text-indigo-600">
                      {method.label}
                    </div>
                    <div className="text-gray-600">
                      {method.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-100">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Proč já?
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>2+ let zkušeností s full-stack vývojem</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Zaměření na odborný růst - ráda a hodně se vzdělávám</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Odbornost v moderních webových technologiích</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Silné zaměření na výkon a uživatelskou zkušenost</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Spolupracující přístup a jasná komunikace</span>
                </li>
              </ul>
            </div>

          {/* Contact Form */}
          {/* <ContactForm /> */}
        </div>
      </div>
    </section>
  );
}