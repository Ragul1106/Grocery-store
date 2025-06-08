import React from 'react';
import { useParams } from 'react-router-dom';

import VegProductDetail from './VegetablesProduct';
import FruitProductDetail from './FruitProduct';
import DairyEggsProductDetail from './DairyEggsProduct';
import MeatSeafoodProductDetail from './MeatSeafoodProduct';
import SnacksProductDetail from './SnacksProduct';
import BakeryProductDetail from './BakeryProduct';
import PantryStaplesProductDetail from './PantryStaplesProduct';
import FrozenFoodProductDetail from './FrozenFoodProduct';

const ProductDetailRouter = () => {
  const { category, productId } = useParams();

  switch (category) {
    case 'vegetable':
      return <VegProductDetail productId={productId} />;
    case 'fruits':
      return <FruitProductDetail productId={productId} />;
    case 'dairy-eggs':
      return <DairyEggsProductDetail productId={productId} />;
    case 'meat-seafood':
      return <MeatSeafoodProductDetail productId={productId} />;
    case 'snacks-beverage':
      return <SnacksProductDetail productId={productId} />;
    case 'bakery':
      return <BakeryProductDetail productId={productId} />;
    case 'pantry-staples':
      return <PantryStaplesProductDetail productId={productId} />;
    case 'frozen-food':
      return <FrozenFoodProductDetail productId={productId} />;
    default:
      return <h3>Product category not found.</h3>;
  }
};

export default ProductDetailRouter;
