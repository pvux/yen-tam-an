import React, { useState } from 'react';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* --- TOP BAR --- */}
      <div className="bg-[#10B981] text-white text-xs py-2 text-center">
        <span className="font-medium">MIỄN PHÍ VẬN CHUYỂN</span> cho đơn hàng từ 1.000.000₫ - Hotline: 0912.345.678
      </div>

      {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6 text-[#10B981]" />
          </button>

          {/* Logo */}
          <Link to="/" className="text-2xl font-serif font-bold text-[#10B981] tracking-wide">
            TÂM AN <span className="text-yellow-600 text-sm block md:inline font-sans font-normal">Nest & Health</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 font-medium text-sm uppercase tracking-wider">
            <Link to="/" className="hover:text-[#10B981] transition-colors">Trang chủ</Link>
            <a href="#" className="hover:text-[#10B981] transition-colors">Về Tâm An</a>
            <a href="#" className="hover:text-[#10B981] transition-colors">Sản phẩm</a>
            <a href="#" className="hover:text-[#10B981] transition-colors">Kiến thức Yến</a>
            <a href="#" className="hover:text-[#10B981] transition-colors">Liên hệ</a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 cursor-pointer hover:text-[#10B981]" />
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-[#10B981]" />
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu (Hidden by default) */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-50 px-4 py-2 space-y-2 border-t">
            <Link to="/" className="block py-2">Trang chủ</Link>
            <a href="#" className="block py-2">Sản phẩm</a>
            <a href="#" className="block py-2">Liên hệ</a>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;