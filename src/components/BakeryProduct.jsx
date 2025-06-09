import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from './CartContext';
import Header from './Header';
import '../assets/css/ProductDetails.css';

import bakery1 from '../assets/images/bakery cate 1.png';
import bakery2 from '../assets/images/bakery cate 2.png';
import bakery3 from '../assets/images/bakery cate 3.png';
import bakery4 from '../assets/images/bakery cate 4.png';
import bakery5 from '../assets/images/bakery cate 5.png';
import bakery6 from '../assets/images/bakery cate 6.png';
import bakery7 from '../assets/images/bakery cate 7.png';
import bakery8 from '../assets/images/bakery cate 8.png';

const allProducts = [
  {
    id: 'bakery1',
    images: [
      {
        src: bakery1,
        name: 'Cookie',
        price: 150,
        category: "Bakery",
        description: 'Crisp, juicy apples perfect for snacking or baking.'
      },
      {
        src: bakery2,
        name: 'Donut',
        price: 160,
        category: "Bakery",
        description: 'Tangy green apples, great for salads and detox.'
      },
      {
        src: bakery3,
        name: 'Sweet',
        price: 180,
        category: "Bakery",
        description: 'Organically grown apples without synthetic chemicals.'
      },
    ]
  },
  {
    id: 'bakery2',
    images: [
      {
        src: bakery2,
        name: 'Sweet2',
        price: 60,
        category: "Bakery",
        description: 'Naturally sweet bananas rich in potassium and fiber.'
      },
      {
        src: bakery1,
        name: 'Barfi',
        price: 75,
        category: "Bakery",
        description: 'Unique red bananas with a sweet and creamy taste.'
      },
      {
        src: bakery7,
        name: 'Kheer',
        price: 50,
        category: "Bakery",
        description: 'Starchy raw bananas used for savory dishes.'
      },
    ]
  },
  {
    id: 'bakery3',
    images: [
      {
        src: bakery3,
        name: 'Sweet3',
        price: 100,
        category: "Bakery",
        description: 'Juicy oranges full of Vitamin C and flavor.'
      },
      {
        src: bakery3,
        name: 'Gajar ka Halwa',
        price: 110,
        category: "Bakery",
        description: 'Small and easy-to-peel tangerines with a sweet taste.'
      },
      {
        src: bakery6,
        name: 'Shrikhand',
        price: 115,
        category: "Bakery",
        description: 'Mandarins are sweeter and less acidic than regular oranges.'
      },
    ]
  },
  {
    id: 'bakery4',
    images: [
      {
        src: bakery4,
        name: 'Sweet4',
        price: 100,
        category: "Bakery",
        description: 'Juicy oranges full of Vitamin C and flavor.'
      },
      {
        src: bakery6,
        name: 'Mysore Pak',
        price: 110,
        category: "Bakery",
        description: 'Small and easy-to-peel tangerines with a sweet taste.'
      },
      {
        src: bakery8,
        name: 'Balushahi',
        price: 115,
        category: "Bakery",
        description: 'Mandarins are sweeter and less acidic than regular oranges.'
      },
    ]
  },
  {
    id: 'bakery5',
    images: [
      {
        src: bakery5,
        name: 'Sweet5',
        price: 100,
        category: "Bakery",
        description: 'Juicy oranges full of Vitamin C and flavor.'
      },
      {
        src: bakery3,
        name: 'Laddoo',
        price: 110,
        category: "Bakery",
        description: 'Small and easy-to-peel tangerines with a sweet taste.'
      },
      {
        src: bakery8,
        name: 'Basundi',
        price: 115,
        category: "Bakery",
        description: 'Mandarins are sweeter and less acidic than regular oranges.'
      },
    ]
  },
  {
    id: 'bakery6',
    images: [
      {
        src: bakery6,
        name: 'Sweet6',
        price: 100,
        category: "Bakery",
        description: 'Juicy oranges full of Vitamin C and flavor.'
      },
      {
        src: bakery1,
        name: 'Malpua',
        price: 110,
        category: "Bakery",
        description: 'Small and easy-to-peel tangerines with a sweet taste.'
      },
      {
        src: bakery7,
        name: 'Ras Malai',
        price: 115,
        category: "Bakery",
        description: 'Mandarins are sweeter and less acidic than regular oranges.'
      },
    ]
  },
  {
    id: 'bakery7',
    images: [
      {
        src: bakery7,
        name: 'Sweet7',
        price: 100,
        category: "Bakery",
        description: 'Juicy oranges full of Vitamin C and flavor.'
      },
      {
        src: bakery3,
        name: 'Jalebi',
        price: 110,
        category: "Bakery",
        description: 'Small and easy-to-peel tangerines with a sweet taste.'
      },
      {
        src: bakery2,
        name: 'Barfi',
        price: 115,
        category: "Bakery",
        description: 'Mandarins are sweeter and less acidic than regular oranges.'
      },
    ]
  },
  {
    id: 'bakery8',
    images: [
      {
        src: bakery8,
        name: 'Swee8',
        price: 100,
        category: "Bakery",
        description: 'Juicy oranges full of Vitamin C and flavor.'
      },
      {
        src: bakery3,
        name: 'Rasgulla',
        price: 110,
        category: "Bakery",
        description: 'Small and easy-to-peel tangerines with a sweet taste.'
      },
      {
        src: bakery5,
        name: 'Halwa',
        price: 115,
        category: "Bakery",
        description: 'Mandarins are sweeter and less acidic than regular oranges.'
      },
    ]
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

const BakeryProduct = () => {
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
        category: selectedVariant.category
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
            <p>{selectedVariant?.description}</p>
            <h4>₹ {selectedVariant?.price}</h4>
            <p><strong>TAX INCLUDED | SHIPPING CALCULATED AT CHECKOUT</strong></p>

            <div className="d-flex align-items-center justify-content-center my-3 gap-3">
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

export default BakeryProduct;
