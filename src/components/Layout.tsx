import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../CartContext';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const location = useLocation();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Promotions', path: '/promotions' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold font-display text-brand-black">
              KINGS <span className="text-brand-gold">POINT</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-gold",
                  location.pathname === link.path ? "text-brand-gold" : "text-gray-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/order" className="relative p-2 text-gray-600 hover:text-brand-gold">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-brand-gold text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to="/menu" className="btn-primary py-2 text-sm">
              Order Now
            </Link>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <Link to="/order" className="relative p-2 text-gray-600">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-brand-gold text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-4 text-base font-medium rounded-md",
                    location.pathname === link.path ? "text-brand-gold bg-brand-gold/5" : "text-gray-600 hover:bg-gray-50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link to="/menu" onClick={() => setIsOpen(false)} className="btn-primary w-full">
                  Order Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-brand-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-display">
              KINGS <span className="text-brand-gold">POINT</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dodoma's premier destination for premium social dining and exquisite beverages. Taste. Relax. Connect.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/kingspoint.dom/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">Facebook</a>
              <a href="https://wa.me/255700000000" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors">WhatsApp</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-brand-gold uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/menu" className="hover:text-white transition-colors">Our Menu</Link></li>
              <li><Link to="/order" className="hover:text-white transition-colors">Order Online</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/promotions" className="hover:text-white transition-colors">Special Offers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-brand-gold uppercase tracking-wider text-xs">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-gold shrink-0" />
                <span>Area D, Dodoma, Tanzania</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-gold shrink-0" />
                <span>+255 700 000 000</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-brand-gold uppercase tracking-wider text-xs">Opening Hours</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex justify-between"><span>Mon - Thu:</span> <span>08:00 - 22:00</span></li>
              <li className="flex justify-between"><span>Fri - Sat:</span> <span>08:00 - 00:00</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span>10:00 - 21:00</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-top border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} KINGS POINT. All rights reserved. Built with pride in Tanzania.</p>
        </div>
      </div>
    </footer>
  );
};
