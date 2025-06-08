import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { CartContext } from './CartContext';
import '../assets/css/Product.css';
import { Link } from 'react-router-dom';

import veg1 from '../assets/images/vege-cate1.png';
import veg2 from '../assets/images/vege-cate2.png';
import veg3 from '../assets/images/vege-cate3.png';
import veg4 from '../assets/images/vege-cate4.png';
import veg5 from '../assets/images/vege-cate5.png';
import veg6 from '../assets/images/vege-cate6.png';
import veg7 from '../assets/images/vege-cate7.png';
import veg8 from '../assets/images/vege-cate8.png';


const productsData = [
  { id: "veg1", name: 'Organic Tomato', price: 80, rating: 5, image: veg1 },
  { id: "veg2", name: 'Carrot', price: 50, rating: 4, image: veg2 },
  { id: "veg3", name: 'Garlic', price: 30, rating: 4, image: veg3 },
  { id: "veg4", name: 'Corn', price: 60, rating: 5, image: veg4 },
  { id: "veg5", name: 'Spinach', price: 40, rating: 3, image: veg5 },
  { id: "veg6", name: 'Tomato Basket', price: 100, rating: 4, image: veg6 },
  { id: "veg7", name: 'Onion', price: 70, rating: 4, image: veg7 },
  { id: "veg8", name: 'Beetroot', price: 90, rating: 5, image: veg8 },
];

const Vegetable = () => {
  const [priceFilter, setPriceFilter] = useState(100);
  const [sortType, setSortType] = useState('featured');
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    let result = productsData.filter(p => p.price <= priceFilter);

    switch (sortType) {
      case 'a-z':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'z-a':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'best-selling':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        break;
    }
    setFilteredProducts(result);
  }, [priceFilter, sortType]);

  return (
  <>
    <Header />
    <main className='vegetable-section'>
      <div className="container-fluid p-4">
        <div className="row">

          <div className="col-md-3 fs-4 fw-bold">
            Filter
            <div className="position-relative mt-4">
              <label className="form-label">Sort by Price</label>
              <div className="range-container position-relative mt-5">
                <div
                  className="price-tag text-white px-2 py-1 rounded position-absolute bg-success"
                  style={{
                    left: `${(priceFilter / 150) * 100}%`,
                    transform: 'translateX(-50%)',
                    top: '-30px'
                  }}
                >
                  ₹ {priceFilter}
                </div>
                <input
                  type="range"
                  min="0"
                  max="150"
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(Number(e.target.value))}
                  className="form-range"
                />
              </div>
            </div>
          </div>

          <div className="col-md-9">
            <div className="text-center mb-4">
              <h3 className="fs-1" style={{ textDecoration: "underline", color: "#28a745" }}>
                Vegetables
              </h3>
            </div>

            <div className="d-flex justify-content-end mb-3">
              <select
                className="form-select w-auto"
                onChange={(e) => setSortType(e.target.value)}
                value={sortType}
              >
                <option value="featured">Featured</option>
                <option value="best-selling">Best Selling</option>
                <option value="a-z">Alphabetically A-Z</option>
                <option value="z-a">Alphabetically Z-A</option>
                <option value="low-high">Price Low to High</option>
                <option value="high-low">Price High to Low</option>
              </select>
            </div>

            <div className="row">
              {filteredProducts.map((product) => (
                <div key={product.id} className="col-md-4 mb-4">
                  <div className="card h-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="card-img-top"
                      onClick={() => navigate(`/product/vegetable/${product.id}`)}
                      style={{ cursor: 'pointer' }}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title fw-bold">{product.name}</h5>
                      <p className="card-text">₹ {product.price}</p>
                      <div className="text-warning mb-2">
                        {Array.from({ length: product.rating }, (_, i) => (
                          <i className="bi bi-star-fill" key={i}></i>
                        ))}
                      </div>
                      <button
                        className="btn btn-success"
                        onClick={() => addToCart(product)}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
);

};

export default Vegetable;
