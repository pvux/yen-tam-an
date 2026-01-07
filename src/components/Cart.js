import React, { useState } from 'react';
import { X } from 'lucide-react';

const Cart = ({ cart, updateQuantity, removeFromCart, handleCheckout }) => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const parsePrice = (priceString) => {
    if (!priceString) return 0;
    return parseInt(priceString.replace(/[^0-9]/g, ''));
  };

  const cartTotal = cart.reduce((total, item) => {
    return total + (parsePrice(item.price) * item.quantity);
  }, 0);

  // Cấu hình thông tin tài khoản ngân hàng (Demo)
  const BANK_ID = "MB"; // Ngân hàng MBBank
  const ACCOUNT_NO = "0912345678"; // Số tài khoản
  const ACCOUNT_NAME = "YEN SAO TAM AN"; // Tên chủ tài khoản
  const TEMPLATE = "compact2"; // Mẫu QR
  const qrUrl = `https://img.vietqr.io/image/${BANK_ID}-${ACCOUNT_NO}-${TEMPLATE}.png?amount=${cartTotal}&addInfo=THANH TOAN DON HANG&accountName=${encodeURIComponent(ACCOUNT_NAME)}`;

  return (
    <section className="py-16 bg-white min-h-[60vh]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-gray-800 text-center mb-12">Giỏ Hàng Của Bạn</h2>
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Giỏ hàng của bạn đang trống.</p>
        ) : (
          <div>
            <div className="space-y-4">
              {cart.map(item => (
                <div key={item.id} className="flex flex-col md:flex-row items-center justify-between p-4 border rounded-2xl shadow-sm">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                    <div>
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <p className="text-sm text-[#D97706] font-bold">{item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 border rounded-full hover:bg-gray-100 transition">-</button>
                      <span className="w-10 text-center font-medium">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 border rounded-full hover:bg-gray-100 transition">+</button>
                    </div>
                    <p className="font-bold w-32 text-right">
                      {new Intl.NumberFormat('vi-VN').format(parsePrice(item.price) * item.quantity)}₫
                    </p>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                      <X size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-end">
              <div className="text-xl font-bold mb-4">
                Tổng cộng: <span className="text-[#D97706] ml-2">
                  {new Intl.NumberFormat('vi-VN').format(cartTotal)}₫
                </span>
              </div>
              <button 
                onClick={() => setShowPaymentModal(true)} 
                className="bg-[#10B981] text-white px-8 py-3 rounded-full font-medium hover:bg-[#059669] transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Tiến hành Thanh toán
              </button>
            </div>

            {/* --- PAYMENT QR MODAL --- */}
            {showPaymentModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-fade-in">
                  <button 
                    onClick={() => setShowPaymentModal(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-gray-100 rounded-full p-1 transition"
                  >
                    <X size={20} />
                  </button>
                  
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-[#064E3B] mb-2">Thanh Toán QR</h3>
                    <p className="text-gray-500 text-sm mb-6">Quét mã VietQR để thanh toán đơn hàng</p>
                    
                    <div className="bg-white p-2 rounded-xl border-2 border-[#10B981] inline-block mb-6 shadow-sm">
                      <img src={qrUrl} alt="VietQR Payment" className="w-64 h-64 object-contain" />
                    </div>
                    
                    <div className="space-y-3 bg-gray-50 p-4 rounded-xl text-sm mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Tổng thanh toán:</span>
                        <span className="font-bold text-[#D97706] text-lg">{new Intl.NumberFormat('vi-VN').format(cartTotal)}₫</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Nội dung CK:</span>
                        <span className="font-medium text-gray-800">THANH TOAN DON HANG</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => { setShowPaymentModal(false); handleCheckout(); }}
                      className="w-full bg-[#10B981] text-white py-3 rounded-xl font-bold hover:bg-[#059669] transition shadow-md"
                    >
                      Xác nhận đã chuyển khoản
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;