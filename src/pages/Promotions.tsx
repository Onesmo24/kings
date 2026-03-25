import React from 'react';
import { motion } from 'motion/react';
import { Tag, Calendar, Gift, Music, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PromotionsPage = () => {
  const offers = [
    {
      title: "Happy Hour Specials",
      desc: "Get 30% off on all signature mocktails and local brews.",
      time: "Mon - Fri, 4 PM - 7 PM",
      icon: <Tag className="text-brand-gold" />,
      tag: "Daily"
    },
    {
      title: "Family Weekend Platter",
      desc: "A massive platter for 4 people including drinks and dessert.",
      time: "Sat - Sun, All Day",
      icon: <Gift className="text-brand-gold" />,
      tag: "Weekend"
    },
    {
      title: "Live Jazz Night",
      desc: "Join us for an evening of smooth jazz and premium dining.",
      time: "Every Friday, 8 PM",
      icon: <Music className="text-brand-gold" />,
      tag: "Event"
    }
  ];

  return (
    <div className="bg-brand-white pb-20">
      <div className="bg-brand-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl mb-4">Promotions & Events</h1>
          <p className="text-gray-400">Exciting offers and memorable experiences at KINGS POINT.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center">
                    {offer.icon}
                  </div>
                  <span className="bg-brand-gold/10 text-brand-gold text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {offer.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{offer.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">{offer.desc}</p>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
                  <Calendar size={14} /> {offer.time}
                </div>
                <Link to="/menu" className="w-full btn-secondary py-3 text-sm">
                  Claim Offer <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Event Banner */}
        <div className="mt-16 relative rounded-3xl overflow-hidden bg-brand-black text-white p-8 md:p-16">
          <div className="absolute inset-0 opacity-40">
            <img src="https://images.unsplash.com/photo-1514525253361-bee8718a300c?auto=format&fit=crop&q=80&w=1200" alt="Event" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="relative z-10 max-w-xl">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">Featured Event</span>
            <h2 className="text-4xl md:text-5xl mt-4 mb-6 leading-tight">New Year's Eve Gala <br/><span className="text-brand-gold">at KINGS POINT</span></h2>
            <p className="text-gray-300 mb-8 leading-relaxed">Join us for the most exclusive countdown in Dodoma. Fine dining, live entertainment, and a spectacular fireworks display.</p>
            <Link to="/contact" className="btn-primary inline-flex">
              Reserve Your Table
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
