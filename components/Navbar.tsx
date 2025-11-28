import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Beaker, BookOpen } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onNavigate: (page: 'home' | 'education') => void;
  currentPage: 'home' | 'education';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleCart, cartCount } = useCart();

  const handleNav = (page: 'home' | 'education', id?: string) => {
    onNavigate(page);
    setIsOpen(false);
    if (page === 'home' && id) {
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
       window.scrollTo(0, 0);
    }
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <button 
            onClick={() => handleNav('home')} 
            className="flex-shrink-0 flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="font-bold text-xl tracking-[0.2em] text-planet-black">NE: PLANET</span>
          </button>
          
          <div className="hidden md:flex space-x-8 items-center">
            <button onClick={() => handleNav('home', 'philosophy')} className="text-gray-500 hover:text-black transition-colors text-sm tracking-wide">
              髮際與背痘之謎
            </button>
            <button onClick={() => handleNav('education')} className={`text-sm tracking-wide flex items-center gap-1 transition-colors ${currentPage === 'education' ? 'text-blue-600 font-medium' : 'text-gray-500 hover:text-black'}`}>
              <BookOpen size={14} />
              暗瘡迷思
            </button>
            <button onClick={() => handleNav('home', 'products')} className="text-gray-500 hover:text-black transition-colors text-sm tracking-wide">
              洗護系列
            </button>
            <button onClick={() => handleNav('home', 'advisor')} className="text-gray-500 hover:text-black transition-colors text-sm tracking-wide flex items-center gap-1">
              <Beaker size={14} />
              成分檢測
            </button>
            <button 
              onClick={toggleCart}
              className="bg-planet-black text-white px-5 py-2 rounded-full text-sm hover:bg-blue-600 transition-all flex items-center gap-2 relative"
            >
              <ShoppingBag size={16} />
              CART
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
             <button onClick={toggleCart} className="bg-planet-black text-white px-4 py-1.5 rounded-full text-xs font-medium relative">
              CART
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-3 h-3 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-black">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full h-screen top-16 left-0 z-40">
          <div className="px-6 pt-8 pb-3 space-y-8 flex flex-col">
            <button onClick={() => handleNav('home', 'philosophy')} className="text-xl font-medium text-gray-900 text-left">洗頭水與暗瘡的關係</button>
            <button onClick={() => handleNav('education')} className="text-xl font-medium text-gray-900 text-left flex items-center gap-2">
               <BookOpen size={20} className="text-blue-600" />
               暗瘡迷思與知識
            </button>
            <button onClick={() => handleNav('home', 'products')} className="text-xl font-medium text-gray-900 text-left">洗護系列 (Hair)</button>
            <button onClick={() => handleNav('home', 'advisor')} className="text-xl font-medium text-gray-900 text-left flex items-center gap-2">
              <Beaker size={20} />
              成分毒性檢測
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;