import ContactHeader from './ContactHeader';
import ContactMethods from './ContactMethods';
import WhyMeSection from './WhyMeSection';
// import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-white"
      aria-labelledby="contact-title"
    >
      <div className="max-w-7xl mx-auto px-6">
        <ContactHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ContactMethods />
          <WhyMeSection />

          {/* Contact Form */}
          {/* <ContactForm /> */}
        </div>
      </div>
    </section>
  );
}
