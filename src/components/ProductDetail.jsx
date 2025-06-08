import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { CartContext } from './CartContext';
import Header from './Header';
import '../assets/css/ProductDetails.css';

import organicTomatoes from "../assets/images/vege-cate6.png";
import freshMeat from "../assets/images/meat cate 2.png";
import seasonalMangoes from "../assets/images/featured pro home 3.png";
import greenOnions from "../assets/images/featured pro home 4.png";

const productData = [
  {
    id: '1',
    name: "Organic Tomatos",
    price: 80,
    image: organicTomatoes,
    images: [
      { src: organicTomatoes, name: "Organic Tomatos", price: 80 },
      { src: seasonalMangoes, name: "Seasonal Mangoes", price: 120 },
      { src: freshMeat, name: "Meat & Seafood", price: 420 },
    ],
  },
  {
    id: '2',
    name: "Meat & Seafood",
    price: 420,
    image: freshMeat,
    images: [
      { src: freshMeat, name: "Meat & Seafood", price: 100 },
      { src: seasonalMangoes, name: "Seasonal Mangoes", price: 120 },
      { src: organicTomatoes, name: "Organic Tomatos", price: 420 },
    ],
  },
  {
    id: '3',
    name: "Seasonal Mangoes",
    price: 120,
    image: seasonalMangoes,
    images: [
      { src: seasonalMangoes, name: "Seasonal Mangoes", price: 120 },
      { src: freshMeat, name: "Meat & Seafood", price: 420 },
      { src: greenOnions, name: "Green Onions", price: 100 },
    ],
  },
  {
    id: '4',
    name: "Green Onions",
    price: 100,
    image: greenOnions,
    images: [
      { src: greenOnions, name: "Green Onions", price: 100 },
      { src: seasonalMangoes, name: "Seasonal Mangoes", price: 120 },
      { src: freshMeat, name: "Meat & Seafood", price: 420 },
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

const ProductDetail = () => {
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
    if (product && selectedVariant) {
      addToCart({
        id: `${productId}-${weight}`,
        name: selectedVariant.name,
        price: selectedVariant.price,
        image: selectedVariant.src,
        quantity,
        weight
      });
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
              <button className="btn btn-outline-secondary" onClick={() => setQuantity(q => Math.max(q - 1, 1))}>-</button>
              <span className="mx-3 fw-bold">{quantity}</span>
              <button className="btn btn-outline-secondary" onClick={() => setQuantity(q => q + 1)}>+</button>
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

export default ProductDetail;
