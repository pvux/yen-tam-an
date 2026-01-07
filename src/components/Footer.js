import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#064E3B] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-2xl font-serif font-bold mb-4">TÂM AN</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Chúng tôi mang đến những sản phẩm yến sào chất lượng nhất từ thiên nhiên, gửi gắm sự an tâm vào từng tổ yến.
          </p>
          <div className="flex space-x-4">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-[#10B981]" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-[#10B981]" />
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4">Liên kết nhanh</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-[#10B981]">Về chúng tôi</a></li>
            <li><a href="#" className="hover:text-[#10B981]">Cửa hàng</a></li>
            <li><a href="#" className="hover:text-[#10B981]">Chính sách đổi trả</a></li>
            <li><a href="#" className="hover:text-[#10B981]">Tin tức & Sự kiện</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4">Sản phẩm</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-[#10B981]">Yến Tinh Chế</a></li>
            <li><a href="#" className="hover:text-[#10B981]">Yến Thô</a></li>
            <li><a href="#" className="hover:text-[#10B981]">Yến Chưng Sẵn</a></li>
            <li><a href="#" className="hover:text-[#10B981]">Quà Biếu Tặng</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4">Liên hệ</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex items-start gap-2">
              <span className="font-bold">Đ/c:</span> 123 Đường Nguyễn Huệ, Q.1, TP.HCM
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">ĐT:</span> 0912.345.678
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">Email:</span> cskh@yensaotaman.com
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-xs">
        © 2024 Yến Sào Tâm An. Thiết kế lấy cảm hứng từ Dola Bakery.
      </div>
    </footer>
  );
};

export default Footer;