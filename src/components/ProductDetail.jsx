import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from './CartContext';
import Header from './Header';
import '../assets/css/ProductDetails.css'; 

import organicTomatoes from "../assets/images/vege-cate6.png"
import freshMeat from "../assets/images/meat cate 2.png";
import seasonalMangoes from "../assets/images/featured pro home 3.png";
import greenOnions from "../assets/images/featured pro home 4.png";

const productData = [
  { id: 1, name: "Organic Tomatos", price: 80, rating: 5, image:organicTomatoes , weight: "1kg" },
  { id: 2, name: "meat-seafood", price: 420, rating: 4, image:freshMeat , weight: "500g" },
  { id: 3, name: "Seasonal Mangoes", price: 120, rating: 4.5, image:seasonalMangoes , weight: "1kg" },
  { id: 4, name: "Green Onions", price: 100, rating: 3, image:greenOnions , weight: "200g" },
];

const ProductDetail = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);

  const productData = allProducts.find(p => p.id === productId);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [weight, setWeight] = useState('250g');

  useEffect(() => {
    if (productData) {
      setSelectedVariant(productData.images[0]);
    }
  }, [productData]);

  const handleAddToCart = () => {
    if (selectedVariant) {
      const cartItem = {
        id: `${productId}-${selectedVariant.name.replace(/\s+/g, '-')}`,
        name: selectedVariant.name,
        price: selectedVariant.price,
        image: selectedVariant.src,
        quantity,
        weight,
      };
      addToCart(cartItem);
    }
  };

  if (!productData) {
    return (
      <>
        <Header />
        <div className="container py-5">
          <h3>Product not found.</h3>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container-fluid py-5 image-content">
        <div className="row">
          <div className="col-md-6">
            <img
              src={selectedVariant?.src}
              className="img-fluid rounded main-product-image"
              alt="Product"
            />
            <div className="d-flex mt-3 gap-2 image-size">
              {productData.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img.src}
                  alt={`Thumbnail ${idx}`}
                  className="img-thumbnail small-thumb"
                  onClick={() => setSelectedVariant(img)}
                />
              ))}
            </div>
          </div>

          <div className="col-md-6 fs-5 fw-bold">
            <h3>{selectedVariant?.name}</h3>
            <p>{selectedVariant?.description?.main}</p>
            <h4>₹ {selectedVariant?.price}</h4>
            <p><strong>TAX INCLUDED | SHIPPING CALCULATED AT CHECKOUT</strong></p>

            <div className="d-flex align-items-center my-3">
              <button
                className="btn btn-outline-secondary"
                onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}
              >-</button>
              <span className="mx-3 fw-bold">{quantity}</span>
              <button
                className="btn btn-outline-secondary"
                onClick={() => setQuantity(prev => prev + 1)}
              >+</button>
            </div>

            <p><strong>Quantity: {weight}</strong></p>
            <div className="mb-3">
              {['250g', '500g', '1kg'].map(w => (
                <label key={w} className="me-3">
                  <input
                    type="radio"
                    name="weight"
                    value={w}
                    checked={weight === w}
                    onChange={() => setWeight(w)}
                  />{' '}
                  {w}
                </label>
              ))}
            </div>

            <button className="btn btn-success mb-3" onClick={handleAddToCart}>
              Add to Cart
            </button>

            <div>
              <p><i className="bi bi-truck"></i> Free shipping on all orders over ₹450</p>
              <p><i className="bi bi-clock-history"></i> Delivery in 3–4 working days</p>
              <p className="text-success">Free delivery and return policies</p>
            </div>
          </div>
        </div>

        {/* Dynamic Description Section */}
        {selectedVariant?.description && (
          <div className='description mt-5 fs-5 fw-bold'>
            <h3 className="mb-3" style={{ textDecoration: "underline" }}>DESCRIPTION</h3>
            <p>{selectedVariant.description.detailed}</p>

            <h5>Appearance:</h5>
            <ul>
              {selectedVariant.description.appearance.map((item, index) => (
                <li key={`appearance-${index}`}>{item}</li>
              ))}
            </ul>

            <h5>Taste and Aroma:</h5>
            <ul>
              {selectedVariant.description.tasteAroma.map((item, index) => (
                <li key={`taste-${index}`}>{item}</li>
              ))}
            </ul>

            <h5>Nutrition:</h5>
            <ul>
              {selectedVariant.description.nutrition.map((item, index) => (
                <li key={`nutrition-${index}`}>{item}</li>
              ))}
            </ul>

            <h5>Uses:</h5>
            <ul>
              {selectedVariant.description.uses.map((item, index) => (
                <li key={`uses-${index}`}>{item}</li>
              ))}
            </ul>

            <h5>Storage:</h5>
            <ul>
              {selectedVariant.description.storage.map((item, index) => (
                <li key={`storage-${index}`}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
