import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './Header';
import '../assets/css/Category.css';


import fruits from '../assets/images/fruits-cate.png';
import vegetables from '../assets/images/vege-cate.png';
import dairy from '../assets/images/eggs-cate.png';
import meat from '../assets/images/meat-sea-food-cate.png';
import bakery from '../assets/images/bakery-cate.png';
import pantry from '../assets/images/pantry-cate.png';
import snacks from '../assets/images/snack-cate.png';
import frozen from '../assets/images/frozen-cate.png';

const categories = [
  { name: 'Fruits', image: fruits, path: '/fruits' },
  { name: 'Vegetables', image: vegetables, path: '/Vegetable' },
  { name: 'Dairy & Eggs', image: dairy, path: '/dairy-eggs' },
  { name: 'Meat & Seafood', image: meat, path: '/meat-seafood' },
  { name: 'Bakery', image: bakery, path: '/bakery' },
  { name: 'Pantry Staples', image: pantry, path: '/pantry-staples' },
  { name: 'Snacks & Beverage', image: snacks, path: '/snacks-beverage' },
  { name: 'Frozen Food', image: frozen, path: '/frozen-food' },
];

const Category = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Category/Grocery Store</title>
      </Helmet>



      <Header />
      <main className='category'>
        <div className="container mt-5 pt-5">
          <h2 className="text-center mb-4">Shop by Category</h2>
          <div className="row">
            {categories.map((cat, index) => (
              <div
                className="col-6 col-md-3 mb-4 text-center"
                key={index}
                onClick={() => navigate(cat.path)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid rounded category-img"
                />
                <h6 className="mt-2">{cat.name}</h6>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Category;
