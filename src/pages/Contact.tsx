import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from 'lucide-react';

export const ContactPage = () => {
  return (
    <div className="bg-brand-white pb-20">
      <div className="bg-brand-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl mb-4">Contact Us</h1>
          <p className="text-gray-400">We'd love to hear from you. Visit us or reach out online.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold mb-8">Get in Touch</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Call Us</p>
                    <p className="font-bold">+255 700 000 000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center shrink-0">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">WhatsApp</p>
                    <a href="https://wa.me/255700000000" className="font-bold text-brand-gold hover:underline">Chat with us</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Email</p>
                    <p className="font-bold">hello@kingspoint.co.tz</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Hours</p>
                    <p className="font-bold">Open Daily from 08:00 AM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-gold p-8 rounded-3xl text-white shadow-xl">
              <h3 className="text-xl font-bold mb-4">Visit Our Location</h3>
              <p className="text-white/80 mb-6 text-sm">Find us in the heart of Dodoma, Area D. We offer ample parking and a secure environment.</p>
              <div className="flex items-center gap-2 font-bold">
                <MapPin size={20} /> Area D, Dodoma
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 h-full">
              <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600">Full Name</label>
                    <input type="text" className="w-full p-4 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600">Email Address</label>
                    <input type="email" className="w-full p-4 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600">Subject</label>
                  <select className="w-full p-4 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all">
                    <option>General Inquiry</option>
                    <option>Table Reservation</option>
                    <option>Event Booking</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600">Message</label>
                  <textarea className="w-full p-4 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all h-40" placeholder="How can we help you?"></textarea>
                </div>
                <button className="btn-primary w-full py-4 text-lg">
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 rounded-3xl overflow-hidden shadow-xl h-96 bg-gray-200 relative">
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-center">
                <MapPin size={48} className="text-brand-gold mx-auto mb-4" />
                <p className="text-gray-500 font-bold">Google Maps Integration</p>
                <p className="text-gray-400 text-sm">Area D, Dodoma, Tanzania</p>
             </div>
          </div>
          {/* In a real app, embed Google Maps iframe here */}
        </div>
      </div>
    </div>
  );
};
