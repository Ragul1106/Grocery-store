import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import { CartProvider } from './components/CartContext';
import Cart from './components/CartPage';
import Category from './components/CategoryPage';
import './index.css';
import Fruits from './components/FruitsPage';
import Vegetable from './components/VegetablePage';
import DairyEggs from './components/DairyEggsPage';
import MeatSeafood from './components/MeatSeaFoodPage';
import Bakery from './components/BakeryPage';
import PantryStaples from './components/PantryStaplesPage';
import SnacksBeverage from './components/SnacksPage';
import FrozenFood from './components/FrozenFoodPage';
import PrivacyPolicy from './components/PrivacyPolicyPage';
import TermsAndConditions from './components/TermsAndConditionsPage ';
import AboutUs from './components/AboutUsPage';
import Footer from './components/Footer';
import ProductDetailRouter from './components/ProductDetailRouter';
import BestSales from './components/BestSalesPage';
import BestSellingProduct from './components/BestSalesProduct';
import Blogs from './components/BlogsPage';
import ProductDetail from './components/ProductDetail';
import ReadMore from './components/ReadmorePage';
import Register from './components/RegisterPage';
import Login from './components/LoginPage';
import Address from './components/AddressPage';
import Payment from './components/PaymentPage';
import BestDeals from './components/BestDeals';
import ScrollToTop from './components/Scroll';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <ScrollToTop/>
        <div className="container mt-5 pt-5">
          <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/category" element={<Category />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/address" element={<Address />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/best-sales" element={<BestSales />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/articles/:id" element={<ReadMore />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />


            <Route path="/fruits" element={<Fruits />} />
            <Route path="/vegetable" element={<Vegetable />} />
            <Route path="/dairy-eggs" element={<DairyEggs />} />
            <Route path="/meat-seafood" element={<MeatSeafood />} />
            <Route path="/bakery" element={<Bakery />} />
            <Route path="/pantry-staples" element={<PantryStaples />} />
            <Route path="/snacks-beverage" element={<SnacksBeverage />} />
            <Route path="/frozen-food" element={<FrozenFood />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsAndConditions />} />
            <Route path="/about-us" element={<AboutUs />} />

            <Route path="/best-deals/:productId" element={<BestDeals />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/product/best-sales/:productId" element={<BestSellingProduct />} />
            <Route path="/product/:category/:productId" element={<ProductDetailRouter />} />

          </Routes>
        </div>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;

