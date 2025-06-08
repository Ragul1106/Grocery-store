import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import { CartProvider } from './components/CartContext';
import Cart from './components/Cart';
import Category from './components/Category';

import Fruits from './components/Fruits';
import Vegetable from './components/Vegetable';
import DairyEggs from './components/DairyEggs';
import MeatSeafood from './components/MeatSeaFood';
import Bakery from './components/Bakery';
import PantryStaples from './components/PantryStaples';
import SnacksBeverage from './components/Snacks';
import FrozenFood from './components/FrozenFood';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions ';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ProductDetailRouter from './components/ProductDetailRouter';
import BestSales from './components/BestSales';
import BestSellingProduct from './components/BestSalesProduct';
import Blogs from './components/Blogs';
// import OrganicTomatos from './components/OrganicTomatoes';
  import ProductDetail from './components/ProductDetail';
import ReadMore from './components/Readmore';
import Register from './components/Register';
import Login from './components/Login';
import Address from './components/Address';
import Payment from './components/Payment';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
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
          {/* <Route path="/organic-tomatos" element={<OrganicTomatos />} /> */}

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

            // Adjust path if needed

<Route path="/product/:id" element={<ProductDetail />} />

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







// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
// import HomePage from './components/HomePage';
// import { CartProvider } from './components/CartContext';
// import Cart from './components/Cart';
// import Category from './components/Category';

// import Fruits from './components/Fruits';
// import Vegetable from './components/Vegetable';
// import DairyEggs from './components/DairyEggs';
// import MeatSeafood from './components/MeatSeaFood';
// import Bakery from './components/Bakery';
// import PantryStaples from './components/PantryStaples';
// import SnacksBeverage from './components/Snacks';
// import FrozenFood from './components/FrozenFood';
// import PrivacyPolicy from './components/PrivacyPolicy';
// import TermsAndConditions from './components/TermsAndConditions ';
// import AboutUs from './components/AboutUs';
// import Footer from './components/Footer';
// import ProductDetailRouter from './components/ProductDetailRouter';
// import BestSales from './components/BestSales';
// import BestSellingProduct from './components/BestSalesProduct';
// import Blogs from './components/Blogs';
// import ReadMore from './components/Readmore';
// import Login from './components/Login';
// import Register from './components/Register';



// function App() {
//   return (
//     <CartProvider>
//       <Router>
//         <Header />
//         <div className="container mt-5 pt-5">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/category" element={<Category />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/best-sales" element={<BestSales />} />
//             <Route path="/blogs" element={<Blogs />} />
//             <Route path="/articles/:id" element={<ReadMore />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/Register" element={<Register />} />

//             <Route path="/account" element={<h1>My Account</h1>} />

//             <Route path="/fruits" element={<Fruits />} />
//             <Route path="/vegetable" element={<Vegetable />} />
//             <Route path="/dairy-eggs" element={<DairyEggs />} />
//             <Route path="/meat-seafood" element={<MeatSeafood />} />
//             <Route path="/bakery" element={<Bakery />} />
//             <Route path="/pantry-staples" element={<PantryStaples />} />
//             <Route path="/snacks-beverage" element={<SnacksBeverage />} />
//             <Route path="/frozen-food" element={<FrozenFood />} />
//             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//             <Route path="/terms-conditions" element={<TermsAndConditions />} />
//             <Route path="/about-us" element={<AboutUs />} />




//             <Route path="/product/best-sales/:productId" element={<BestSellingProduct />} />
//             <Route path="/product/:category/:productId" element={<ProductDetailRouter />} />



//           </Routes>
//         </div>
//         <Footer />
//       </Router>
//     </CartProvider>
//   );
// }

// export default App;
