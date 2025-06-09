import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import cart from '../assets/images/cart-icon.png';
import { CartContext } from './CartContext';

import '../assets/css/Header.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.length;
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const isCategoriesActive = [
    '/category',
    '/vegetable',
    '/fruits',
    '/dairy-eggs',
    '/meat-seafood',
    '/bakery',
    '/pantry-staples',
    '/snacks-beverage',
    '/frozen-food'
  ].some(path => location.pathname.toLowerCase().includes(path));

  const isBestSalesActive = [
    '/best-sales'
  ].some(path => location.pathname.toLowerCase().includes(path));

  const productCategoryMap = {

    tomato: { path: "/product/vegetable", id: "veg1" },
    spinach: { path: "/product/vegetable", id: "veg5" },
    corn: { path: "/product/vegetable", id: "veg4" },
    carrot: { path: "/product/vegetable", id: "veg2" },
    garlic: { path: "/product/vegetable", id: "veg3" },
    beetroot: { path: "/product/vegetable", id: "veg8" },
    onion: { path: "/product/vegetable", id: "veg7" },
    Tomato: { path: "/product/vegetable", id: "veg6" },

    banana: { path: "/product/fruits", id: "fruit3" },
    apple: { path: "/product/fruits", id: "fruit2" },
    cherry: { path: "/product/fruits", id: "fruit7" },
    pista: { path: "/product/fruits", id: "fruit8" },
    strawberry:  { path: "/product/fruits", id: "fruit1" },
    watermelon: { path: "/product/fruits", id: "fruit4" },
    blueberry: { path: "/product/fruits", id: "fruit5" },
    orange:{ path: "/product/fruits", id: "fruit6" },

    milk: { path: "/product/dairy-eggs", id: "diary2" },
    boiledEgg: { path: "/product/dairy-eggs", id: "diary1" },
    butter:{ path: "/product/dairy-eggs", id: "diary4" },
    cheeseEgg: { path: "/product/dairy-eggs", id: "diary5" },
    cheese: { path: "/product/dairy-eggs", id: "diary6" },
    cutCheese: { path: "/product/dairy-eggs", id: "diary7" },
    coloredEgg: { path: "/product/dairy-eggs", id: "fruit6" },
    yogurt: "/dairy-eggs", 

    cookies: "/bakery",
    stuffedSweet: "/bakery",
    samosa: "/bakery",
    donut: "/bakery",
    chocoBun: "/bakery",
    cookies2: "/bakery",
    samosa2: "/bakery",
    cookies3: "/bakery",

    rice: "/pantry-staples",
    flour: "/pantry-staples",
    sugar: "/pantry-staples",
    salt: "/pantry-staples",
    pasta: "/pantry-staples",
    lentils: "/pantry-staples",
    oliveOil: "/pantry-staples",
    coffee: "/pantry-staples",

    chips: "/snacks-beverage",
    soda: "/snacks-beverage",
    juice: "/snacks-beverage",
    chocolateBar: "/snacks-beverage",
    crackers: "/snacks-beverage",
    cookiesPack: "/snacks-beverage",
    teaBags: "/snacks-beverage",
    energyDrink: "/snacks-beverage",

    chicken: "/meat-seafood",
    beef: "/meat-seafood",
    fish: "/meat-seafood",
    shrimp: "/meat-seafood",
    pork: "/meat-seafood",
    lamb: "/meat-seafood",
    salmon: "/meat-seafood",
    tuna: "/meat-seafood",

    peas: "/frozen-food",
    frozenPizza: "/frozen-food",
    icecream: "/frozen-food",
    frozenVegetables: "/frozen-food",
    frenchFries: "/frozen-food",
    chickenNuggets: "/frozen-food",
    frozenBerries: "/frozen-food",
    waffles: "/frozen-food"
};

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    window.location.reload();
  };

   const handleSearch = () => {
  const lowerTerm = searchTerm.toLowerCase().trim();
  const product = productCategoryMap[lowerTerm];
  
  if (product) {
    navigate(`${product.path}/${product.id}`);
  } else {
    alert("Product not found");}
};


  return (
    <header className="fixed-header">
      <div className="top-banner">
        <div className="container">
          <p className="top-text">
            Fresh & Organic produce from our farmers to your kitchen
          </p>
        </div>
      </div>

      <div className="main-header">
        <div className="container">
          <div className="row align-items-center first-row">
            <div className="col-lg-4 col-md-4">
              <NavLink to="/" className="logo-link">
                <img src={logo} alt="Fresh & Organic" className="logo-img" />
              </NavLink>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search for products"
                  className="form-control search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSearch();
                  }}
                />
                <button className="btn search-btn" onClick={handleSearch} style={{ color: 'white' }}>
                  <i className="bi bi-search me-1"></i> Search
                </button>

              </div>
            </div>
            <div className="col-md-2"></div>
          </div>

          <div className="row second-row">
            <div className="col-12">
              <nav className="nav-container fs-5 fw-bold">
                <button
                  className="mobile-toggle-btn d-lg-none"
                  onClick={toggleNav}
                >
                  <i className={`bi ${isNavOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
                </button>
                <ul
                  className={`nav-list ${isNavOpen ? 'mobile-nav-open' : ''}`}
                >
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/category"
                      className={() =>
                        isCategoriesActive ? 'nav-link active' : 'nav-link'
                      }
                    >
                      Categories
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/best-sales"
                      className={() =>
                        isBestSalesActive ? 'nav-link active' : 'nav-link'
                      }
                    >
                      Best Sales
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/blogs"
                      className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                      }
                    >
                      Blogs
                    </NavLink>
                  </li>
                  <li className="position-relative ms-3">
                    <NavLink
                      to="/cart"
                      className={({ isActive }) =>
                        isActive ? 'cart-link active' : 'cart-link'
                      }
                    >
                      <img src={cart} alt="cart" className="cart-img" />
                      {totalItems > 0 && (
                        <span
                          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                          style={{ fontSize: '0.75rem' }}
                        >
                          {totalItems}
                          <span className="visually-hidden">
                            items in cart
                          </span>
                        </span>
                      )}
                    </NavLink>
                  </li>
                  <li className="ms-3">
                    {loggedInUser ? (
                      <div className="dropdown">
                        <button
                          className="btn btn-success dropdown-toggle account-btn"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          My Account
                        </button>
                        <ul className="dropdown-menu" style={{backgroundColor:"green"}}>
                          <li>
                            <button className="dropdown-item logout-btn" onClick={handleLogout}>
                              Logout
                            </button>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <NavLink
                        to="/register"
                        className={({ isActive }) =>
                          isActive
                            ? 'btn btn-success bg-success account-btn'
                            : 'btn btn-outline-success account-btn'
                        }
                      >
                        Register Now
                      </NavLink>
                    )}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
