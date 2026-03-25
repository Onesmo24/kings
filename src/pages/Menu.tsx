import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Plus, ShoppingBag, Check, Info } from 'lucide-react';
import { useCart } from '../CartContext';
import { MenuItem } from '../lib/utils';

export const MenuPage = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/menu')
      .then(res => res.json())
      .then(data => {
        setMenuItems(data);
        setFilteredItems(data);
      });
  }, []);

  useEffect(() => {
    let result = menuItems;
    if (activeCategory !== 'All') {
      result = result.filter(item => item.category === activeCategory);
    }
    if (searchQuery) {
      result = result.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredItems(result);
  }, [activeCategory, searchQuery, menuItems]);

  const categories = ['All', 'Food', 'Drinks', 'Specials'];

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item);
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <div className="min-h-screen bg-brand-white pb-20">
      {/* Header */}
      <div className="bg-brand-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Our Menu</h1>
          <p className="text-gray-400 max-w-xl mx-auto">Explore our curated selection of gourmet meals and signature beverages crafted for the Dodoma palate.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8">
        {/* Filters & Search */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-12 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                    activeCategory === cat 
                      ? 'bg-brand-gold text-white shadow-md' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold transition-all"
              />
            </div>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="card-premium flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {item.bestSeller && (
                    <div className="absolute top-4 left-4 bg-brand-gold text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                      Best Seller
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <span className="text-brand-gold font-bold">TSh {item.price.toLocaleString()}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-6 flex-grow">{item.description}</p>
                  <button 
                    onClick={() => handleAddToCart(item)}
                    className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                      addedId === item.id 
                        ? 'bg-green-500 text-white' 
                        : 'bg-brand-black text-white hover:bg-brand-gold'
                    }`}
                  >
                    {addedId === item.id ? (
                      <><Check size={18} /> Added</>
                    ) : (
                      <><Plus size={18} /> Add to Cart</>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <Info className="mx-auto text-gray-300 mb-4" size={48} />
            <h3 className="text-xl text-gray-500">No items found matching your criteria.</h3>
            <button 
              onClick={() => {setActiveCategory('All'); setSearchQuery('');}}
              className="mt-4 text-brand-gold font-semibold"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
