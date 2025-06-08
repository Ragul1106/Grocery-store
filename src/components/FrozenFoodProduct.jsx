import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from './CartContext';
import Header from './Header';
import '../assets/css/ProductDetails.css';

import frozen1 from '../assets/images/frozen cate 1.png';
import frozen2 from '../assets/images/frozen cate 2.png';
import frozen3 from '../assets/images/frozen cate 3.png';
import frozen4 from '../assets/images/frozen cate 4.png';
import frozen5 from '../assets/images/frozen cate 5.png';
import frozen6 from '../assets/images/frozen cate 6.png';
import frozen7 from '../assets/images/frozen cate 7.png';
import frozen8 from '../assets/images/frozen cate 8.png';

const allProducts = [
  {
    id: 'frozen1',
    images: [
      {
        src: frozen1,
        name: 'Frezzed Apple',
        price: 150,
        category: "Frozen Food",
        description: 'Crisp, juicy apples perfect for snacking or baking.'
      },
      {
        src: frozen2,
        name: 'Green Apple',
        price: 160,
        category: "Frozen Food",
        description: 'Tangy green apples, great for salads and detox.'
      },
      {
        src: frozen3,
        name: 'Organic Apple',
        price: 180,
        category: "Frozen Food",
        description: 'Organically grown apples without synthetic chemicals.'
      },
    ]
  },
  {
    id: 'frozen2',
    images: [
      {
        src: frozen2,
        name: 'Mango Ice',
        price: 60,
        category: "Frozen Food",
        description: 'Naturally sweet bananas rich in potassium and fiber.'
      },
      {
        src: frozen5,
        name: 'Red Banana',
        price: 75,
        category: "Frozen Food",
        description: 'Unique red bananas with a sweet and creamy taste.'
      },
      {
        src: frozen7,
        name: 'Raw Banana',
        price: 50,
        category: "Frozen Food",
        description: 'Starchy raw bananas used for savory dishes.'
      },
    ]
  },
  {
    id: 'frozen3',
    images: [
      {
        src: frozen3,
        name: 'Ice Cream 2',
        price: 100,
        category: "Frozen Food",
        description: 'Juicy oranges full of Vitamin C and flavor.'
      },
      {
        src: frozen7,
        name: 'Tangerine',
        price: 110,
        category: "Frozen Food",
        description: 'Small and easy-to-peel tangerines with a sweet taste.'
      },
      {
        src: frozen6,
        name: 'Mandarin Orange',
        price: 115,
        category: "Frozen Food",
        description: 'Mandarins are sweeter and less acidic than regular oranges.'
      },
    ]
  },
  {
    id: 'frozen4',
    images: [
      {
        src: frozen4,
        name: 'Mutton',
        price: 100,
        category: "Frozen Food",
        description: 'Juicy oranges full of Vitamin C and flavor.'
      },
      {
        src: frozen6,
        name: 'Tangerine',
        price: 110,
        category: "Frozen Food",
        description: 'Small and easy-to-peel tangerines with a sweet taste.'
      },
      {
        src: frozen8,
        name: 'Mandarin Orange',
        price: 115,
        category: "Frozen Food",
        description: 'Mandarins are sweeter and less acidic than regular oranges.'
      },
    ]
  },
  {
    id: 'frozen5',
    images: [
      {
        src: frozen5,
        name: 'Freezed Fish',
        price: 100,
        category: "Frozen Food",
        description: 'Juicy oranges full of Vitamin C and flavor.'
      },
      {
        src: frozen3,
        name: 'Tangerine',
        price: 110,
        category: "Frozen Food",
        description: 'Small and easy-to-peel tangerines with a sweet taste.'
      },
      {
        src: frozen8,
        name: 'Mandarin Orange',
        price: 115,
        category: "Frozen Food",
        description: 'Mandarins are sweeter and less acidic than regular oranges.'
      },
    ]
  },
  {
    id: 'frozen6',
    images: [
      {
        src: frozen6,
        name: 'Mango Cream',
        price: 100,
        category: "Frozen Food",
        description: 'Juicy oranges full of Vitamin C and flavor.'
      },
      {
        src: frozen1,
        name: 'Tangerine',
        price: 110,
        category: "Frozen Food",
        description: 'Small and easy-to-peel tangerines with a sweet taste.'
      },
      {
        src: frozen7,
        name: 'Mandarin Orange',
        price: 115,
        category: "Frozen Food",
        description: 'Mandarins are sweeter and less acidic than regular oranges.'
      },
    ]
  },
  {
    id: 'frozen7',
    images: [
      {
        src: frozen7,
        name: 'Ice Bar',
        price: 100,
        category: "Frozen Food",
        description: 'Juicy oranges full of Vitamin C and flavor.'
      },
      {
        src: frozen3,
        name: 'Tangerine',
        price: 110,
        category: "Frozen Food",
        description: 'Small and easy-to-peel tangerines with a sweet taste.'
      },
      {
        src: frozen2,
        name: 'Mandarin Orange',
        price: 115,
        category: "Frozen Food",
        description: 'Mandarins are sweeter and less acidic than regular oranges.'
      },
    ]
  },
  {
    id: 'frozen8',
    images: [
      {
        src: frozen8,
        name: 'Cone Ice Cream',
        price: 100,
        category: "Frozen Food",
        description: 'Juicy oranges full of Vitamin C and flavor.'
      },
      {
        src: frozen3,
        name: 'Tangerine',
        price: 110,
        category: "Frozen Food",
        description: 'Small and easy-to-peel tangerines with a sweet taste.'
      },
      {
        src: frozen5,
        name: 'Mandarin Orange',
        price: 115,
        category: "Frozen Food",
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

const FruitProduct = () => {
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
            <p>{selectedVariant?.description}</p>
            <h4>₹ {selectedVariant?.price}</h4>
            <p><strong>TAX INCLUDED | SHIPPING CALCULATED AT CHECKOUT</strong></p>

            <div className="d-flex align-items-center my-3">
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

export default FruitProduct;
