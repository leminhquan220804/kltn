// src/pages/Category/CategoryPage.jsx
import { FiChevronRight, FiChevronDown } from 'react-icons/fi';
import ProductCard from '../../components/Product/ProductCard';

// Mock data (Dùng lại list sách cũ nhưng thêm thuộc tính tác giả)
const MOCK_BOOKS = [
  { id: 1, name: "Túp lều bác Tom (TB 2026)", author: "Harriet Beecher Stowe", slug: "tup-leu-bac-tom", thumbnail: "https://placehold.co/300x400/EEE/31343C?text=Tup+Leu", originalPrice: 150000, salePrice: 150000 },
  { id: 2, name: "Sách lật tương tác song ngữ 0 - 3 tuổi - Ú òa (TB 2026)", author: "Giuliano Ferri", slug: "sach-lat-u-oa", thumbnail: "https://placehold.co/300x400/EEE/31343C?text=U+Oa", originalPrice: 85000, salePrice: 85000 },
  { id: 3, name: "Chuyện con chó tên là trung thành (TB 2026)", author: "Luis Sepúlveda", slug: "chuyen-con-cho", thumbnail: "https://placehold.co/300x400/EEE/31343C?text=Trung+Thanh", originalPrice: 90000, salePrice: 90000 },
  { id: 4, name: "Tàn ngày để lại (TB 2026)", author: "Kazuo Ishiguro", slug: "tan-ngay-de-lai", thumbnail: "https://placehold.co/300x400/EEE/31343C?text=Tan+Ngay", originalPrice: 120000, salePrice: 120000 },
  { id: 5, name: "Kim các tự (TB 2026)", author: "Mishima Yukio", slug: "kim-cac-tu", thumbnail: "https://placehold.co/300x400/EEE/31343C?text=Kim+Cac+Tu", originalPrice: 110000, salePrice: 110000 },
  { id: 6, name: "Người tình Sputnik", author: "Haruki Murakami", slug: "nguoi-tinh-sputnik", thumbnail: "https://placehold.co/300x400/EEE/31343C?text=Sputnik", originalPrice: 96000, salePrice: 81600 },
  { id: 7, name: "Kiêu hãnh và định kiến (TB 2026)", author: "Jane Austen", slug: "kieu-hanh", thumbnail: "https://placehold.co/300x400/EEE/31343C?text=Kieu+Hanh", originalPrice: 150000, salePrice: 127500 },
  { id: 8, name: "Ông nội vượt ngục (TB 2026)", author: "David Walliams", slug: "ong-noi", thumbnail: "https://placehold.co/300x400/EEE/31343C?text=Ong+Noi", originalPrice: 156000, salePrice: 132600 },
];

const CategoryPage = () => {
  return (
    <div className="bg-white min-h-screen pb-10">
      
      {/* BREADCRUMB (Đường dẫn) */}
      <div className="bg-[#f0f9f3] py-3 border-b border-green-100">
        <div className="container mx-auto px-4 text-sm text-gray-600 flex items-center gap-2">
          <span className="hover:text-[#157a2c] cursor-pointer">Trang chủ</span>
          <FiChevronRight size={14} className="text-gray-400" />
          <span className="text-[#157a2c] font-medium">Hư cấu</span>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-6 flex flex-col md:flex-row gap-8">
        
        {/* === CỘT TRÁI: SIDEBAR BỘ LỌC === */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <h2 className="font-bold text-[#157a2c] text-lg mb-4 border-b pb-2">Bộ lọc tìm kiếm</h2>
          
          {/* Bộ lọc 1: Danh mục */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-800 mb-3">Danh mục</h3>
            <div className="max-h-60 overflow-y-auto pr-2 custom-scrollbar flex flex-col gap-2">
              {['Văn học hiện đại', 'Văn học kinh điển', 'Văn học thiếu nhi', 'Lãng mạn', 'Kỳ ảo', 'Trinh thám - Kinh dị', 'Khoa học Viễn tưởng', 'Phiêu lưu ly kỳ', 'Tản văn'].map((item, idx) => (
                <label key={idx} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-[#157a2c]">
                  <input type="checkbox" className="w-4 h-4 text-[#157a2c] rounded border-gray-300 focus:ring-[#157a2c]" />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Bộ lọc 2: Ấn bản */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-800 mb-3">Ấn bản</h3>
            <div className="flex flex-col gap-2">
              {['Bìa cứng', 'Bìa mềm', 'Giới hạn'].map((item, idx) => (
                <label key={idx} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-[#157a2c]">
                  <input type="checkbox" className="w-4 h-4 text-[#157a2c] rounded border-gray-300 focus:ring-[#157a2c]" />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Bộ lọc 3: Quốc gia */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-800 mb-3">Quốc gia</h3>
            <div className="flex flex-col gap-2">
              {['Việt Nam', 'Trung Quốc', 'Nhật Bản', 'Pháp', 'Đức', 'Hàn Quốc'].map((item, idx) => (
                <label key={idx} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-[#157a2c]">
                  <input type="checkbox" className="w-4 h-4 text-[#157a2c] rounded border-gray-300 focus:ring-[#157a2c]" />
                  {item}
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* === CỘT PHẢI: LƯỚI SẢN PHẨM === */}
        <div className="flex-grow">
          {/* Header của cột phải */}
          <div className="flex justify-between items-center mb-6 border-b pb-2">
            <h1 className="text-2xl font-bold text-[#157a2c]">Hư cấu</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Sắp xếp theo</span>
              <div className="relative">
                <select className="appearance-none bg-[#0e5c1f] text-white text-sm font-medium pl-4 pr-10 py-2 rounded outline-none cursor-pointer">
                  <option value="default">Mặc định</option>
                  <option value="price_asc">Giá từ thấp tới cao</option>
                  <option value="price_desc">Giá từ cao tới thấp</option>
                  <option value="newest">Mới nhất</option>
                </select>
                <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-white pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Lưới sản phẩm (Grid) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {MOCK_BOOKS.map((book) => (
              <ProductCard key={book.id} book={book} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CategoryPage;