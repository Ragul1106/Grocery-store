import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { CartContext } from './CartContext';
import Header from './Header';
import '../assets/css/ProductDetails.css';

import RedChilles from "../assets/images/best deals 1.png";
import FreshEgg from "../assets/images/best deals 2.png";
import SoyaChunks from "../assets/images/best deals 3.png";
import Drybeans from "../assets/images/best deals 4.png";

const productData = [
  {
    id: '31',
    name: "Red Chilles",
    price: 80,
    image: RedChilles,
    images: [
      { src: RedChilles, name: "Red Chilles", price: 80 },
      { src: FreshEgg, name: "Fresh Eggs", price: 120 },
      { src: SoyaChunks, name: "Soya Chunks", price: 420 },
    ],
  },
  {
    id: '32',
    name: "Fresh Eggs",
    price: 420,
    image: FreshEgg,
    images: [
      { src: FreshEgg, name: "Fresh Eggs", price: 100 },
      { src: SoyaChunks, name: "Soya Chunks", price: 120 },
      { src: Drybeans, name: "Dry Beans", price: 420 },
    ],
  },
  {
    id: '33',
    name: "Soya Chunks",
    price: 120,
    image: SoyaChunks,
    images: [
      { src: SoyaChunks, name: "Soya Chunks", price: 120 },
      { src: Drybeans, name: "Dry Beans", price: 70 },
      { src: FreshEgg, name: "Fresh Eggs", price: 100 },
    ],
  },
  {
    id: '34',
    name: "Dry Beans",
    price: 100,
    image: Drybeans,
    images: [
      { src: Drybeans, name: "Dry Beans", price: 70 },
      { src: RedChilles, name: "Red Chilles", price: 30 },
      { src: FreshEgg, name: "Fresh Eggs", price: 120 },
    ],
  },
];

const strawberryDescription = {
  main: "Strawberries are often described as sweet, juicy, and bright red berries with a fragrant, fruity aroma. They are typically sold fresh in containers or boxes and are a popular addition to various recipes and meals.",
  detailed: "Here's a more detailed look at how strawberries might be described in a grocery store setting:",
  appearance: [
    "Color: Bright red, with variations depending on the variety.",
    "Shape: Typically round or oval, with a smooth surface.",
    "Seeds: The seeds are small, whitish or brownish specks that cover the surface of the fruit.",
    "Freshness: Shiny, firm, and free from blemishes or mold."
  ],
  tasteAroma: [
    "Flavor: Sweet and juicy, with a slightly tart or sour note in some varieties.",
    "Aroma: A pleasant, fruity, and fragrant aroma."
  ],
  nutrition: [
    "Vitamin C: Rich in vitamin C, an important antioxidant.",
    "Fiber: A good source of fiber.",
    "Other nutrients: Contains other vitamins, minerals, and antioxidants.",
    "A healthy and low-calorie fruit."
  ],
  uses: [
    "Fresh consumption: Enjoyed as a snack or added to salads, desserts, or smoothies.",
    "Culinary applications: Used in jams, sauces, desserts, and other dishes."
  ],
  storage: [
    "Refrigeration: Should be refrigerated to maintain freshness.",
    "Humidity: Best stored in the refrigerator at high humidity."
  ]
};

const BestDeals = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [weight, setWeight] = useState('250g');
  const [selectedVariant, setSelectedVariant] = useState(null);

  useEffect(() => {
    const found = productData.find(p => p.id === productId);
    if (found) {
      setProduct(found);
      setSelectedVariant(found.images?.[0]);
    }
  }, [productId]);

 const handleAddToCart = () => {
    if (selectedVariant) {
      const cartItem = {
        id: `${productId}-${selectedVariant.name.replace(/\s+/g, '-')}`,
        name: selectedVariant.name,
        price: selectedVariant.price,
        image: selectedVariant.src,
        quantity,
        weight,
        category: selectedVariant.category
      };
      addToCart(cartItem);
    }
  };

  if (!product || !selectedVariant) {
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
     <Helmet>
        <title>{selectedVariant.name} | Grocery Store</title>
      </Helmet>
      <Header />
      <div className="container-fluid py-5 image-content">
        <div className="row">
          <div className="col-md-6">
            <img
              src={selectedVariant.src}
              className="img-fluid rounded main-product-image"
              alt={selectedVariant.name}
            />
            <div className="d-flex mt-3 gap-2 image-size">
              {product.images.map((variant, idx) => (
                <img
                  key={idx}
                  src={variant.src}
                  alt={`thumb-${idx}`}
                  className={`img-thumbnail small-thumb ${selectedVariant.src === variant.src ? "border border-success" : ""}`}
                  onClick={() => setSelectedVariant(variant)}
                />
              ))}
            </div>

          </div>

          <div className="col-md-6 fs-5 fw-bold">
            <h3>{selectedVariant.name}</h3>
            <p>Each of our products are hand-selected from the local farmers and helps you improve good health</p>
            <h4>₹ {selectedVariant.price}</h4>
            <p><strong>TAX INCLUDED | SHIPPING CALCULATED AT CHECKOUT</strong></p>

            <div className="d-flex align-items-center my-3">
             <button
                  className="btn border-0 shadow-none"
                  onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}
                >-</button>

                <span
                  className="px-3 py-1 text-white rounded text-center fw-bold"
                  style={{ minWidth: '40px',backgroundColor:"#4EB528" }}
                >
                  {quantity}
                </span>

                <button
                  className="btn border-0 shadow-none"
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
        <div className='description mt-5 fs-5 fw-bold'>
          <h3 className="mb-3" style={{ textDecoration: "underline" }}>DESCRIPTION</h3>
          <p>{strawberryDescription.main}</p>
          <p>{strawberryDescription.detailed}</p>

          <h5 className='fs-5 fw-bold'>Appearance:</h5>
          <ul>
            {strawberryDescription.appearance.map((item, index) => (
              <li key={`appearance-${index}`}>{item}</li>
            ))}
          </ul>

          <h5 className='fs-5 fw-bold'>Taste and Aroma:</h5>
          <ul>
            {strawberryDescription.tasteAroma.map((item, index) => (
              <li key={`taste-${index}`}>{item}</li>
            ))}
          </ul>

          <h5 className='fs-5 fw-bold'>Nutrition:</h5>
          <ul>
            {strawberryDescription.nutrition.map((item, index) => (
              <li key={`nutrition-${index}`}>{item}</li>
            ))}
          </ul>

          <h5 className='fs-5 fw-bold'>Uses:</h5>
          <ul>
            {strawberryDescription.uses.map((item, index) => (
              <li key={`uses-${index}`}>{item}</li>
            ))}
          </ul>

          <h5>Storage:</h5>
          <ul>
            {strawberryDescription.storage.map((item, index) => (
              <li key={`storage-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BestDeals;
