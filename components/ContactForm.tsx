'use client';

import { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    console.log('Pole formuláře aktualizováno:', name, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Formulář odeslán s daty:', formData);
    
    // Simulace odeslání formuláře
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      console.log('Odeslání formuláře úspěšně dokončeno');
      
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 2000);
  };

  return (
    <div>
      <h3 className="text-3xl font-bold text-gray-900 mb-8">
        Odeslat zprávu
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Celé jméno
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200"
              placeholder="Vaše jméno"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Emailová adresa
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200"
              placeholder="vas.email@priklad.cz"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Předmět
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200"
            placeholder="Poptávka projektu, spolupráce, atd."
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Zpráva
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200 resize-none"
            placeholder="Řekněte mi o vašem projektu nebo jak vám mohu pomoci..."
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105'
          } text-white shadow-lg`}
        >
          {isSubmitting ? 'Odesílám...' : 'Odeslat zprávu'}
        </button>
        
        {submitStatus === 'success' && (
          <div className="text-center p-4 bg-green-100 text-green-800 rounded-xl">
            Děkuji! Vaše zpráva byla úspěšně odeslána.
          </div>
        )}
      </form>
    </div>
  );
} 