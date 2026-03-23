import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/Home/HomePage';
import CartPage from './pages/Cart/CartPage';
import CategoryPage from './pages/Category/CategoryPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route cha dùng MainLayout làm khung */}
        <Route path="/" element={<MainLayout />}>
          {/* Các Route con sẽ được render vào vị trí của <Outlet /> */}
          <Route index element={<HomePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="category/:slug" element={<CategoryPage />} />
          {/* Nếu người dùng nhập sai URL, hiển thị trang 404 */}
          <Route path="*" element={<h2 className="text-center mt-10 text-2xl text-red-500">404 - Không tìm thấy trang</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;