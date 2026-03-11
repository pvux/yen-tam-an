import React, { useState } from 'react';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoTamAn from '../assets/logo.png'; // đường dẫn tùy vị trí bạn để ảnh

// ... existing imports

const Header = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Khi scroll quá 100px (qua phần logo to), set state
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* --- TOP BAR --- */}
      <div className="bg-[#10B981] text-white text-xs py-2 text-center hidden md:block">
        <span className="font-medium">MIỄN PHÍ VẬN CHUYỂN</span> cho đơn hàng từ 1.000.000₫ - Hotline: 0888.201.881 
      </div>

      {/* --- HEADER MAIN --- */}
      <header className={`sticky top-0 z-50 bg-white border-b border-gray-100 transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">

            {/* LEFT: LOGO */}
            <Link to="/" className="flex-shrink-0 mr-8 flex items-center space-x-2">
              <img
                src={logoTamAn}
                alt="Tâm An Nest & Health"
                className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16 md:h-20'}`}
              />
              {!isScrolled && (
                <div className="hidden lg:block">
                  <h1 className="text-xl font-serif font-bold text-[#B60517] leading-none">YẾN TÂM AN</h1>
                  <p className="text-[10px] text-gray-500 tracking-wider">TINH HOA ĐẤT TRỜI</p>
                </div>
              )}
            </Link>

            {/* MIDDLE: DESKTOP NAV */}
            <nav className="hidden lg:flex items-center space-x-8 font-medium text-sm md:text-base uppercase tracking-wider">
              <Link to="/" className="text-gray-700 hover:text-[#10B981] transition-colors relative group">
                Trang chủ
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#10B981] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <a href="#" className="text-gray-700 hover:text-[#10B981] transition-colors relative group">
                Về Tâm An
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#10B981] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="text-gray-700 hover:text-[#10B981] transition-colors relative group">
                Sản phẩm
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#10B981] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="text-gray-700 hover:text-[#10B981] transition-colors relative group">
                Kiến thức Yến
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#10B981] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="text-gray-700 hover:text-[#10B981] transition-colors relative group">
                Liên hệ
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#10B981] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            {/* RIGHT: CART & MOBILE MENU */}
            <div className="flex items-center space-x-4">
              {/* Search Icon */}
              <Search className="w-5 h-5 cursor-pointer text-gray-600 hover:text-[#10B981] transition" />

              {/* Cart */}
              <Link to="/cart" className="relative group">
                <ShoppingCart className="w-5 h-5 cursor-pointer text-gray-600 hover:text-[#10B981] transition" />
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              </Link>

              {/* Mobile Menu Button */}
              <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="w-6 h-6 text-[#10B981]" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 animate-fade-in-down">
            <div className="container mx-auto px-4 py-4 space-y-4 font-medium text-gray-700">
              <Link to="/" className="block py-2 border-b border-gray-50 hover:text-[#10B981]">TRANG CHỦ</Link>
              <a href="#" className="block py-2 border-b border-gray-50 hover:text-[#10B981]">GIỚI THIỆU</a>
              <a href="#" className="block py-2 border-b border-gray-50 hover:text-[#10B981]">SẢN PHẨM</a>
              <a href="#" className="block py-2 border-b border-gray-50 hover:text-[#10B981]">KIẾN THỨC</a>
              <a href="#" className="block py-2 hover:text-[#10B981]">LIÊN HỆ</a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;