import ContactMethodItem from './ContactMethodItem';

interface ContactMethod {
  label: string;
  value: string;
  icon: string;
  href: string;
  description: string;
}

const contactMethods: ContactMethod[] = [
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

export default function ContactMethods() {
  return (
    <section aria-labelledby="contact-methods-title">
      <h3
        id="contact-methods-title"
        className="text-3xl font-bold text-gray-900 mb-8"
      >
        Kontaktujte mě
      </h3>

      <div className="space-y-6" role="list" aria-label="Způsoby kontaktu">
        {contactMethods.map((method) => (
          <ContactMethodItem key={method.href} {...method} />
        ))}
      </div>
    </section>
  );
}
