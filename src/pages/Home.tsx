import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Clock, MapPin, ChevronRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MenuItem } from '../lib/utils';

export const Home = () => {
  const [bestSellers, setBestSellers] = useState<MenuItem[]>([]);

  useEffect(() => {
    fetch('/api/menu')
      .then(res => res.json())
      .then(data => setBestSellers(data.filter((item: MenuItem) => item.bestSeller)));
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-brand-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920" 
            alt="Kings Point Ambiance" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/60 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 bg-brand-gold/20 text-brand-gold rounded-full text-sm font-semibold mb-6 border border-brand-gold/30">
              Premium Dining in Dodoma
            </span>
            <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight">
              Taste. Relax. <span className="text-brand-gold">Connect.</span>
            </h1>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-lg">
              Experience the finest fusion of modern lifestyle and Tanzanian identity at KINGS POINT. From gourmet meals to signature drinks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/menu" className="btn-primary text-lg px-8">
                Order Now <ShoppingBag size={20} />
              </Link>
              <Link to="/contact" className="btn-secondary text-lg px-8 bg-white/5 backdrop-blur-sm">
                Visit Us <MapPin size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Star className="text-brand-gold" />, title: "Premium Quality", desc: "We use only the freshest local ingredients for every dish." },
              { icon: <Clock className="text-brand-gold" />, title: "Fast Delivery", desc: "Get your favorite meals delivered to your doorstep in Dodoma." },
              { icon: <MapPin className="text-brand-gold" />, title: "Central Location", desc: "Located in the heart of Dodoma for your convenience." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-white border border-gray-100 flex flex-col items-center text-center shadow-sm"
              >
                <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl mb-3 font-display">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-brand-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-brand-gold font-semibold uppercase tracking-widest text-xs">Top Picks</span>
              <h2 className="text-3xl md:text-4xl mt-2">Our Best Sellers</h2>
            </div>
            <Link to="/menu" className="text-brand-gold flex items-center gap-2 font-semibold hover:gap-3 transition-all">
              View Full Menu <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestSellers.map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="card-premium group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    TSh {item.price.toLocaleString()}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                  <Link to="/menu" className="w-full btn-secondary py-2 text-sm">
                    Add to Cart
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Preview */}
      <section className="py-24 bg-brand-black text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800" 
                  alt="Kings Point Story" 
                  className="w-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-gold rounded-2xl -z-0 opacity-20 blur-2xl" />
            </div>
            <div className="lg:w-1/2">
              <span className="text-brand-gold font-semibold uppercase tracking-widest text-xs">Our Story</span>
              <h2 className="text-4xl md:text-5xl mt-4 mb-8">More Than Just Food. <br/><span className="text-brand-gold">It's an Experience.</span></h2>
              <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                Founded in the heart of Dodoma, KINGS POINT was born from a passion for exceptional dining and social connection. We believe that every meal should be a celebration of local pride and international standards.
              </p>
              <Link to="/about" className="btn-primary inline-flex">
                Read Our Story <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-brand-gold font-semibold uppercase tracking-widest text-xs">Social Feed</span>
            <h2 className="text-3xl md:text-4xl mt-2 mb-4">Follow us on Instagram</h2>
            <a 
              href="https://www.instagram.com/kingspoint.dom/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-gold font-bold hover:underline"
            >
              @kingspoint.dom
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600", // Grilled meat
              "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600", // Cocktail
              "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600", // Ambiance
              "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600", // Platter
              "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=600", // Drink
              "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80&w=600", // Food
              "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=600", // Dessert
              "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600", // Interior
            ].map((img, i) => (
              <motion.a
                key={i}
                href="https://www.instagram.com/kingspoint.dom/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="relative aspect-square overflow-hidden rounded-xl group"
              >
                <img 
                  src={img} 
                  alt={`Instagram feed ${i}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-sm font-bold">View on Instagram</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl text-white mb-8">Ready to Taste the Best of Dodoma?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/menu" className="bg-brand-black text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all">
              Order Online Now
            </Link>
            <Link to="/contact" className="bg-white text-brand-black px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all">
              Visit Our Location
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
