import React, { useState, useEffect } from 'react';
import { useCart } from '../App/Contexts/CartContext';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const AddToCartButton = ({ product, initialQuantity = 1 }) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [isAdding, setIsAdding] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { dispatch } = useCart();
  const navigate = useNavigate();

  // Handle quantity changes with boundary checks
  const handleDecrement = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    setQuantity(Math.max(1, value));
  };

  // Add to cart with loading state and success feedback
  const handleAddToCart = async () => {
    setIsAdding(true);
    try {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          id: product.id,
          name: product.name,
          price: product.price,
          imageurl: product.imageurl,
          quantity: quantity,
        },
      });
      setShowSuccess(true);

         navigate("/CartPage")


    } finally {
      setIsAdding(false);
    }


  };

  // Hide success message after delay
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-4">
        {/* Quantity Selector */}
        <div className="flex border rounded">
          <button
            onClick={handleDecrement}
            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Decrease quantity"
            disabled={quantity <= 1}
          >
            -
          </button>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-12 px-2 py-1 text-center border-x"
            aria-label="Quantity"
          />
          <button
            onClick={handleIncrement}
            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`px-6 py-3 bg-red-600 text-white font-bold uppercase tracking-wide rounded hover:bg-red-700 transition-colors ${
            isAdding ? 'opacity-75 cursor-not-allowed' : ''
          }`}
        >
          {isAdding ? 'Adding...' : 'Add to Cart'}
        </button>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="text-green-600 animate-fade-in">
          {quantity} {product.name} added to cart!
        </div>
      )}
    </div>
  );
};

AddToCartButton.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageurl: PropTypes.string,
  }).isRequired,
  initialQuantity: PropTypes.number,
};

export default AddToCartButton;
