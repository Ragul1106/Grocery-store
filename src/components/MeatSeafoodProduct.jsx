import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from './CartContext';
import Header from './Header';
import '../assets/css/ProductDetails.css';

import meat1 from '../assets/images/meat cate 1.png';
import meat2 from '../assets/images/meat cate 2.png';
import meat3 from '../assets/images/meat cate 3.png';
import meat4 from '../assets/images/meat cate 4.png';
import meat5 from '../assets/images/meat cate 5.png';
import meat6 from '../assets/images/meat cate 6.png';
import meat7 from '../assets/images/meat cate 7.png';
import meat8 from '../assets/images/meat cate 8.png';

const allProducts = [
  {
    id: 'meat1',
    images: [
      {
        src: meat1,
        name: 'Prawn',
        price: 150,
        category: "Meat & Seafood",
        description: 'Crisp, juicy apples perfect for snacking or baking.'
      },
      {
        src: meat2,
        name: 'Beaf',
        price: 160,
        category: "Meat & Seafood",
        description: 'Tangy green apples, great for salads and detox.'
      },
      {
        src: meat3,
        name: 'Chicken',
        price: 180,
        category: "Meat & Seafood",
        description: 'Organically grown apples without synthetic chemicals.'
      },
    ]
  },
  {
    id: 'meat2',
    images: [
      {
        src: meat2,
        name: 'Beaf',
        price: 60,
        category: "Meat & Seafood",
        description: 'Naturally sweet bananas rich in potassium and fiber.'
      },
      {
        src: meat1,
        name: 'Prawn',
        price: 75,
        category: "Meat & Seafood",
        description: 'Unique red bananas with a sweet and creamy taste.'
      },
      {
        src: meat8,
        name: 'Mutton',
        price: 50,
        category: "Meat & Seafood",
        description: 'Starchy raw bananas used for savory dishes.'
      },
    ]
  },
  {
    id: 'meat3',
    images: [
      {
        src: meat3,
        name: 'Chicken lollypop',
        price: 100,
        category: "Meat & Seafood",
        description: 'Juicy oranges full of Vitamin C and flavor.'
      },
      {
        src: meat1,
        name: 'Prawn',
        price: 110,
        category: "Meat & Seafood",
        description: 'Small and easy-to-peel tangerines with a sweet taste.'
      },
      {
        src: meat7,
        name: '2 Fish Pieces',
        price: 115,
        category: "Meat & Seafood",
        description: 'Mandarins are sweeter and less acidic than regular oranges.'
      },
    ]
  },
  {
    id: 'meat4',
    images: [
      {
        src: meat4,
        name: 'leg piece',
        price: 100,
        category: "Meat & Seafood",
        description: 'Juicy oranges full of Vitamin C and flavor.'
      },
      {
        src: meat6,
        name: 'Small Chicken',
        price: 110,
        category: "Meat & Seafood",
        description: 'Small and easy-to-peel tangerines with a sweet taste.'
      },
      {
        src: meat8,
        name: 'Mutton',
        price: 115,
        category: "Meat & Seafood",
        description: 'Mandarins are sweeter and less acidic than regular oranges.'
      },
    ]
  },
  {
    id: 'meat5',
    images: [
      {
        src: meat5,
        name: 'Fish',
        price: 100,
        category: "Meat & Seafood",
        description: 'Juicy oranges full of Vitamin C and flavor.'
      },
      {
        src: meat3,
        name: 'Chicken',
        price: 110,
        category: "Meat & Seafood",
        description: 'Small and easy-to-peel tangerines with a sweet taste.'
      },
      {
        src: meat8,
        name: 'Mutton',
        price: 115,
        category: "Meat & Seafood",
        description: 'Mandarins are sweeter and less acidic than regular oranges.'
      },
    ]
  },
  {
    id: 'meat6',
    images: [
      {
        src: meat6,
        name: 'meat',
        price: 100,
        category: "Meat & Seafood",
        description: 'Juicy oranges full of Vitamin C and flavor.'
      },
      {
        src: meat1,
        name: 'Prawn',
        price: 110,
        category: "Meat & Seafood",
        description: 'Small and easy-to-peel tangerines with a sweet taste.'
      },
      {
        src: meat7,
        name: '2 Fish Pieces',
        price: 115,
        category: "Meat & Seafood",
        description: 'Mandarins are sweeter and less acidic than regular oranges.'
      },
    ]
  },
  {
    id: 'meat7',
    images: [
      {
        src: meat7,
        name: 'Frezzed fish',
        price: 100,
        category: "Meat & Seafood",
        description: 'Juicy oranges full of Vitamin C and flavor.'
      },
      {
        src: meat3,
        name: 'Chicken',
        price: 110,
        category: "Meat & Seafood",
        description: 'Small and easy-to-peel tangerines with a sweet taste.'
      },
      {
        src: meat2,
        name: 'Fish',
        price: 115,
        category: "Meat & Seafood",
        description: 'Mandarins are sweeter and less acidic than regular oranges.'
      },
    ]
  },
  {
    id: 'meat8',
    images: [
      {
        src: meat8,
        name: 'Mutton',
        price: 100,
        category: "Meat & Seafood",
        description: 'Juicy oranges full of Vitamin C and flavor.'
      },
      {
        src: meat3,
        name: 'Chicken',
        price: 110,
        category: "Meat & Seafood",
        description: 'Small and easy-to-peel tangerines with a sweet taste.'
      },
      {
        src: meat5,
        name: 'Fish',
        price: 115,
        category: "Meat & Seafood",
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

const MeatSeaFoodProduct = () => {
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

            <div className="d-flex align-items-center my-3">
              <div className="d-flex align-items-center justify-content-center my-3 gap-3">
                <button
                  className="btn border-0 shadow-none"
                  onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}
                >-</button>

                <span
                  className="px-3 py-1  text-white rounded text-center fw-bold"
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

export default MeatSeaFoodProduct;
