import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext';
import { Navbar, Footer } from './components/Layout';
import { Home } from './pages/Home';
import { MenuPage } from './pages/Menu';
import { OrderPage } from './pages/Order';
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';
import { PromotionsPage } from './pages/Promotions';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/promotions" element={<PromotionsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
