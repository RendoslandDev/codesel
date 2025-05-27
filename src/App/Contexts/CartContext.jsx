import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingProduct = state.products.find(product => product.id === action.payload.id);
      if (existingProduct) {
        return {
          ...state,
          products: state.products.map(item =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + action.payload.quantity }
              : product
          ),
        };
      }
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        products: state.products.map(item =>
          product.id === action.payload.id
            ? { ...product, quantity: action.payload.quantity }
            : item
        ),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        products: [],
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { products: [] });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
