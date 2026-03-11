import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const ContactMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Menu Options */}
            <div
                className={`flex flex-col gap-3 mb-4 transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
                    }`}
            >
                {/* Facebook Option */}
                {/* Facebook Option */}
                <button
                    onClick={() => {
                        if (window.FB && window.FB.CustomerChat) {
                            window.FB.CustomerChat.show(true); // Show native chat window
                        } else {
                            // Fallback if SDK not loaded
                            window.open("https://www.facebook.com/messages/t/100069416836777", "_blank");
                        }
                    }}
                    className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-lg hover:bg-gray-50 transition-colors min-w-[200px] text-left w-full"
                >
                    <div className="w-10 h-10 rounded-full bg-[#0084FF] flex items-center justify-center shrink-0">
                        <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 2.21.734 4.142 1.956 5.67C3.155 18.774 2.186 21 2.186 21c0 0 2.871 0 4.887-1.16C8.361 20.44 10.124 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm1.216 13.91l-2.071-2.185-3.923 2.185 4.114-4.524 2.13 2.185 3.864-2.185-4.114 4.524z" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-gray-800 text-sm">Facebook Chat</span>
                        <span className="text-xs text-gray-500">Hỗ trợ qua Facebook</span>
                    </div>
                </button>

                {/* Zalo Option */}
                <a
                    href="https://zalo.me/0888201881" // Số điện thoại từ Footer
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-lg hover:bg-gray-50 transition-colors min-w-[200px]"
                >
                    <div className="w-10 h-10 rounded-full bg-[#0068FF] flex items-center justify-center shrink-0">
                        <span className="font-bold text-white text-xs">Zalo</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-gray-800 text-sm">Zalo Chat</span>
                        <span className="text-xs text-gray-500">Hỗ trợ qua ZALO</span>
                    </div>
                </a>
            </div>

            {/* Toggle Button */}
            <button
                onClick={toggleMenu}
                className="w-14 h-14 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
            >
                {isOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
            </button>
        </div>
    );
};

export default ContactMenu;
