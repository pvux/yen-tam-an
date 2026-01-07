import React from 'react';
import { ShoppingCart, Phone, Star, Heart, Calendar, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Yến Tinh Chế Hảo Hạng (100g)",
    price: "3.800.000₫",
    oldPrice: "4.200.000₫",
    image: "https://images.unsplash.com/photo-1632314546590-b99b50e39527?auto=format&fit=crop&q=80&w=500",
    tag: "Bán chạy"
  },
  {
    id: 2,
    name: "Hồng Yến Nguyên Tổ (50g)",
    price: "2.500.000₫",
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1615485925763-867862f80eb6?auto=format&fit=crop&q=80&w=500",
    tag: "Cao cấp"
  },
  {
    id: 3,
    name: "Yến Chưng Đường Phèn (Hũ 70ml)",
    price: "65.000₫",
    oldPrice: "80.000₫",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=500",
    tag: "Tiện lợi"
  },
  {
    id: 4,
    name: "Set Quà Tặng Tâm An Luxury",
    price: "1.200.000₫",
    oldPrice: "1.500.000₫",
    image: "https://images.unsplash.com/photo-1549488344-c7079585812d?auto=format&fit=crop&q=80&w=500",
    tag: "Quà tặng"
  }
];
const articles = [
  {
    id: 1,
    title: "Cách chưng yến đường phèn táo đỏ hạt sen",
    excerpt: "Hướng dẫn chi tiết cách chưng yến sào với táo đỏ và hạt sen, món ăn bổ dưỡng cho cả gia đình.",
    date: "12/05/2024",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 2,
    title: "5 Công dụng tuyệt vời của yến sào với trẻ nhỏ",
    excerpt: "Yến sào giúp tăng cường sức đề kháng, phát triển trí não và chiều cao cho bé yêu của bạn.",
    date: "10/05/2024",
    image: "https://images.unsplash.com/photo-1615485925763-867862f80eb6?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 3,
    title: "Phân biệt yến thật và yến giả đơn giản nhất",
    excerpt: "Những mẹo nhỏ giúp bạn dễ dàng nhận biết yến sào nguyên chất và tránh mua phải hàng kém chất lượng.",
    date: "08/05/2024",
    image: "https://images.unsplash.com/photo-1632314546590-b99b50e39527?auto=format&fit=crop&q=80&w=500"
  }
];
const Home = ({ addToCart }) => {
  return (
    <>
      {/* --- HERO BANNER --- */}
      <section className="relative h-[500px] bg-[#E6FFFA] flex items-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 z-10">
            <h3 className="text-[#10B981] font-bold uppercase tracking-widest text-sm">Tinh hoa đất trời</h3>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-800 leading-tight">
              Thân An <br/> <span className="text-[#10B981]">Vạn Sự An</span>
            </h1>
            <p className="text-gray-500 max-w-md">
              Yến sào Tâm An cam kết 100% nguyên chất, không chất bảo quản, giữ trọn vẹn dinh dưỡng cho gia đình bạn.
            </p>
            <button className="bg-[#10B981] text-white px-8 py-3 rounded-full font-medium hover:bg-[#059669] transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Mua Ngay Hôm Nay
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 relative">
             <div className="w-full h-64 md:h-96 bg-gradient-to-tr from-[#A7F3D0] to-[#E0F2F1] rounded-tl-[100px] rounded-br-[100px] shadow-inner flex items-center justify-center overflow-hidden">
                <img 
                  src="https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2025/3/11/to-yen-17416707983001574625142.png" 
                  alt="Yến sào Tâm An" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
             </div>
          </div>
        </div>
      </section>

      {/* --- USP SECTION --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border border-[#ECFDF5] rounded-xl hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto bg-[#D1FAE5] rounded-full flex items-center justify-center mb-4">
              <Star className="text-[#059669]" />
            </div>
            <h3 className="font-bold text-lg mb-2">100% Nguyên Chất</h3>
            <p className="text-sm text-gray-500">Cam kết hoàn tiền 200% nếu phát hiện hàng giả.</p>
          </div>
          <div className="p-6 border border-[#ECFDF5] rounded-xl hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto bg-[#D1FAE5] rounded-full flex items-center justify-center mb-4">
              <Heart className="text-[#059669]" />
            </div>
            <h3 className="font-bold text-lg mb-2">An Toàn Tuyệt Đối</h3>
            <p className="text-sm text-gray-500">Quy trình sơ chế thủ công, không hóa chất.</p>
          </div>
          <div className="p-6 border border-[#ECFDF5] rounded-xl hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto bg-[#D1FAE5] rounded-full flex items-center justify-center mb-4">
              <Phone className="text-[#059669]" />
            </div>
            <h3 className="font-bold text-lg mb-2">Tư Vấn Tận Tâm</h3>
            <p className="text-sm text-gray-500">Hỗ trợ 24/7, giao hàng nhanh chóng.</p>
          </div>
        </div>
      </section>
{/* --- NEWS & ARTICLES --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h4 className="text-[#10B981] font-bold uppercase mb-2">Góc chia sẻ</h4>
            <h2 className="text-3xl font-serif font-bold text-gray-800">Kiến Thức & Cẩm Nang</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div key={article.id} className="group cursor-pointer">
                <div className="overflow-hidden rounded-xl mb-4">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {article.date}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#10B981] transition">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-[#10B981] font-medium group-hover:underline">
                  Xem chi tiết <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --- PRODUCTS --- */}
      <section className="py-16 bg-[#F0FDF4]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h4 className="text-[#10B981] font-bold uppercase mb-2">Sản phẩm nổi bật</h4>
            <h2 className="text-3xl font-serif font-bold text-gray-800">Lựa Chọn Của Khách Hàng</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <span className="absolute top-3 left-3 bg-[#10B981] text-white text-xs px-2 py-1 rounded font-medium z-10">{product.tag}</span>
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <button onClick={() => addToCart(product)} className="bg-white text-[#10B981] p-3 rounded-full hover:bg-[#10B981] hover:text-white transition"><ShoppingCart className="w-5 h-5"/></button>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-medium text-gray-800 text-lg mb-2 truncate px-2">{product.name}</h3>
                  <div className="text-[#D97706] font-bold text-lg">{product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;