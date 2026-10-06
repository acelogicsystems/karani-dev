import React, { useState } from 'react';
import { MessageSquare, Check, Send } from 'lucide-react';

export default function Contact() {
  const [selectedService, setSelectedService] = useState('Website & M-Pesa');
  const [timeline, setTimeline] = useState('Within 2-4 weeks');
  const [notes, setNotes] = useState('');

  // Replace with your real Kenyan WhatsApp business or personal phone number
  const WHATSAPP_NUMBER = "254711317540"; 

  const services = [
    'Website & M-Pesa Integration',
    'Interactive Web GIS / Maps',
    'KoboToolbox & Field Data Pipeline',
    'Custom Business Software / Dashboard'
  ];

  const timelines = [
    'As soon as possible',
    'Within 2-4 weeks',
    'Just planning / Inquiring'
  ];

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const message = `Hello Karani Systems,%0A%0AI want to discuss a project:%0A- *Service:* ${selectedService}%0A- *Timeline:* ${timeline}%0A${notes ? `- *Brief Details:* ${notes}%0A` : ''}%0ALet's talk.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-emerald-700 text-xs font-mono font-semibold tracking-widest uppercase mb-2">
            Start A Project
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Tell us what you need. <br />
            We talk directly on WhatsApp.
          </h2>
          <p className="text-slate-600 text-sm">
            Select what you are looking for, hit the button, and we will reply promptly with timelines and next steps.
          </p>
        </div>

        {/* Interactive Box */}
        <form 
          onSubmit={handleSendWhatsApp}
          className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-10 shadow-sm"
        >
          {/* Service Selection */}
          <div className="mb-8">
            <label className="block text-xs font-mono font-semibold uppercase text-slate-700 mb-3">
              1. What type of solution do you need?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setSelectedService(item)}
                  className={`text-left text-xs font-medium px-4 py-3 rounded-xl border transition-all flex items-center justify-between ${
                    selectedService === item
                      ? 'bg-slate-900 border-slate-900 text-white'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <span>{item}</span>
                  {selectedService === item && <Check className="w-4 h-4 text-emerald-400" />}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline Selection */}
          <div className="mb-8">
            <label className="block text-xs font-mono font-semibold uppercase text-slate-700 mb-3">
              2. When do you need this running?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {timelines.map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setTimeline(item)}
                  className={`text-center text-xs font-medium px-4 py-3 rounded-xl border transition-all ${
                    timeline === item
                      ? 'bg-slate-900 border-slate-900 text-white'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Optional Short Description */}
          <div className="mb-8">
            <label className="block text-xs font-mono font-semibold uppercase text-slate-700 mb-3">
              3. Any specific requirements? (Optional)
            </label>
            <textarea
              rows="3"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Needs Lipa Na M-Pesa STK push for our boutique hotel in Nakuru..."
              className="w-full text-xs rounded-xl border border-slate-200 p-3 bg-white text-slate-800 focus:outline-none focus:border-slate-900 transition-colors"
            />
          </div>

          {/* Submit / WhatsApp Launch Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Open in WhatsApp & Send Inquiry</span>
          </button>

          <p className="text-center text-[11px] text-slate-500 font-mono mt-4">
            Direct chat • Nairobi, Kenya • Fast response
          </p>
        </form>

      </div>
    </section>
  );
}