import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from './CartContext';
import Header from './Header';
import '../assets/css/ProductDetails.css';

import veg1 from '../assets/images/vege-cate1.png';
import veg2 from '../assets/images/vege-cate2.png';
import veg3 from '../assets/images/vege-cate3.png';
import veg4 from '../assets/images/vege-cate4.png';
import veg5 from '../assets/images/vege-cate5.png';
import veg6 from '../assets/images/vege-cate6.png';
import veg7 from '../assets/images/vege-cate7.png';
import veg8 from '../assets/images/vege-cate8.png';

const allProducts = [
  {
    id: 'veg1',
    images: [
      {
        src: veg1,
        name: 'Organic Onion',
        price: 120,
        category: "Vegetables",
        description: 'Fresh organic onions packed with antioxidants and flavor, perfect for curries and salads.'
      },
      {
        src: veg2,
        name: 'Corn',
        price: 130,
        category: "Vegetables",
        description: 'Zesty and mildly spicy red onions, ideal for salads and pickles.'
      },
      {
        src: veg8,
        name: 'Spring Onion',
        price: 100,
        category: "Vegetables",
        description: 'Tender spring onions, great for garnishes and Chinese recipes.'
      },
    ]
  },
  {
    id: 'veg2',
    images: [
      {
        src: veg2,
        name: 'Carrot',
        price: 90,
        category: "Vegetables",
        description: 'Sweet and crunchy carrots rich in vitamin A, ideal for salads and juices.'
      },
      {
        src: veg5,
        name: 'Baby Carrot',
        price: 100,
        category: "Vegetables",
        description: 'Delicious and snackable baby carrots, great for kids and diet plans.'
      },
      {
        src: veg7,
        name: 'Organic Carrot',
        price: 110, category: "Vegetables",
        description: 'Organic carrots grown without pesticides for a healthier lifestyle.'
      },
    ]
  },
  {
    id: 'veg3',
    images: [
      {
        src: veg3,
        name: 'Garlic',
        price: 350, category: "Vegetables",
        description: 'Aromatic and powerful garlic bulbs, essential in everyday Indian cooking.'
      },
      {
        src: veg6,
        name: 'Tomato',
        price: 400, category: "Vegetables",
        description: 'Convenient ready-to-use peeled garlic for faster cooking.'
      },
      {
        src: veg2,
        name: 'Carrot',
        price: 370, category: "Vegetables",
        description: 'Big, fresh cloves of garlic rich in flavor and aroma.'
      },
    ]
  },
  {
    id: 'veg4',
    images: [
      {
        src: veg4,
        name: 'Corn',
        price: 80, category: "Vegetables",
        description: 'Sweet corn perfect for boiling, roasting, or mixing in salads.'
      },
      {
        src: veg7,
        name: 'Beans',
        price: 90, category: "Vegetables",
        description: 'Crunchy baby corn for Chinese cuisine and stir-fries.'
      },
      {
        src: veg5,
        name: 'Spinach',
        price: 95, category: "Vegetables",
        description: 'Naturally grown corn with no chemical treatment.'
      },
    ]
  },
  {
    id: 'veg5',
    images: [
      {
        src: veg5,
        name: 'Spinach',
        price: 80, category: "Vegetables",
        description: 'Sweet corn perfect for boiling, roasting, or mixing in salads.'
      },
      {
        src: veg1,
        name: 'Onion',
        price: 90, category: "Vegetables",
        description: 'Crunchy baby corn for Chinese cuisine and stir-fries.'
      },
      {
        src: veg7,
        name: 'Beans',
        price: 95, category: "Vegetables",
        description: 'Naturally grown corn with no chemical treatment.'
      },
    ]
  },
  {
    id: 'veg6',
    images: [
      {
        src: veg6,
        name: 'Tomato',
        price: 80, category: "Vegetables",
        description: 'Sweet corn perfect for boiling, roasting, or mixing in salads.'
      },
      {
        src: veg3,
        name: 'Garlic',
        price: 90, category: "Vegetables",
        description: 'Crunchy baby corn for Chinese cuisine and stir-fries.'
      },
      {
        src: veg1,
        name: 'Onion',
        price: 95, category: "Vegetables",
        description: 'Naturally grown corn with no chemical treatment.'
      },
    ]
  },
  {
    id: 'veg7',
    images: [
      {
        src: veg7,
        name: 'Beans',
        price: 80, category: "Vegetables",
        description: 'Sweet corn perfect for boiling, roasting, or mixing in salads.'
      },
      {
        src: veg2,
        name: 'Carrot',
        price: 90, category: "Vegetables",
        description: 'Crunchy baby corn for Chinese cuisine and stir-fries.'
      },
      {
        src: veg1,
        name: 'Organic Onion',
        price: 95, category: "Vegetables",
        description: 'Naturally grown corn with no chemical treatment.'
      },
    ]
  },
  {
    id: 'veg8',
    images: [
      {
        src: veg8,
        name: 'Beetroot',
        price: 80, category: "Vegetables",
        description: 'Sweet corn perfect for boiling, roasting, or mixing in salads.'
      },
      {
        src: veg4,
        name: 'Baby Corn',
        price: 90, category: "Vegetables",
        description: 'Crunchy baby corn for Chinese cuisine and stir-fries.'
      },
      {
        src: veg5,
        name: 'spinach',
        price: 95, category: "Vegetables",
        description: 'Naturally grown corn with no chemical treatment.'
      },
    ]
  },
];

const VegProductDetail = () => {
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
        category: selectedVariant.category,
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

export default VegProductDetail;