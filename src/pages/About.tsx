import React from 'react';
import { motion } from 'motion/react';
import { Users, Heart, Award, Coffee } from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="bg-brand-white">
      {/* Hero */}
      <section className="relative py-24 bg-brand-black text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl mb-6"
          >
            Our <span className="text-brand-gold">Story</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A journey of taste, community, and the vibrant spirit of Dodoma.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1920" alt="Kitchen" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl mb-8">The Vision Behind <br/>KINGS POINT</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  KINGS POINT was established with a singular goal: to redefine the dining landscape in Dodoma. We saw a need for a space that combines premium culinary experiences with a welcoming, social atmosphere.
                </p>
                <p>
                  Our name reflects our commitment to excellence—treating every guest like royalty while remaining a central point for the community to gather, celebrate, and connect.
                </p>
                <p>
                  From our locally sourced ingredients to our modern architectural design, every detail of KINGS POINT is a tribute to the growth and vibrancy of Tanzania's capital city.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600" alt="Interior 1" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=600" alt="Food 1" className="rounded-2xl shadow-lg mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Users />, label: "Community First", desc: "We are a hub for social connection." },
              { icon: <Heart />, label: "Passion for Taste", desc: "Every recipe is crafted with love." },
              { icon: <Award />, label: "Premium Standard", desc: "Uncompromising quality in all we do." },
              { icon: <Coffee />, label: "Local Pride", desc: "Celebrating Dodoma's unique identity." },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h4 className="font-bold mb-2">{item.label}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-brand-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-16">The Faces Behind the Flavor</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: "Chef Amara", role: "Head Chef", img: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80&w=400" },
              { name: "David M.", role: "Founder", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
              { name: "Sarah K.", role: "Mixologist", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
            ].map((person, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-xl font-bold">{person.name}</h4>
                <p className="text-brand-gold">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
