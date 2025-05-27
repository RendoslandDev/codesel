
import React from 'react';
import { useCart } from '../Contexts/CartContext';
import {Link} from 'react-router-dom';
import NavBar from '../../Components/NavBar';

export default function CartPage  () {
  const { state: { products }, dispatch } = useCart();

  const totalPrice = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const handleRemoveItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    }
  };

  return (
    <>
    <NavBar/>
    <div className="container mx-auto px-4 py-8 font-serif my-35">
      <h1 className="text-3xl font-bold font-serif mb-8">Your Shopping Cart</h1>

      {products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl mb-4 font-serif">Your cart is empty</p>
          <Link to="/">
            <a className="bg-red-600 text-white px-6 py-3  font-serif font-extrabold rounded hover:bg-red-300 transition">
              Continue Shopping
            </a>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 ">
            <div className="bg-white rounded shadow overflow-hidden ">
              <div className="hidden md:grid grid-cols-12 text-black p-4 font-medium uppercase bg-gray-500">
                <div className="col-span-5">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              {products.map((product) => (
                <div key={product.id} className="grid grid-cols-12 p-4 border-b items-center font-serif text-black">
                  <div className="col-span-5 flex items-center">
                    <img
                      src={product.imageurl}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded mr-4"
                    />
                    <div>
                      <h3 className="font-medium">{product.name}</h3>
                      <button
                        onClick={() => handleRemoveItem(product.id)}
                        className="text-white bg-red-500 font-serif text-sm mt-1  p-2 rounded font-bold"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="col-span-2 text-center font-mono">GH₵{product.price.toFixed(2)}</div>
                  <div className="col-span-3 flex justify-center">
                    <div className="flex border border-gray-500 rounded">
                      <button
                        onClick={() => handleQuantityChange(product.id, product.quantity - 1)}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                      >
                        -
                      </button>
                      <span className="px-4 py-1">{product.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-span-2 text-right font-medium">
                    GH₵{(product.price * product.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between font-mono">
                  <span>Subtotal</span>
                  <span>GH₵{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-serif text-black">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t pt-4 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>GH₵{totalPrice.toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full bg-red-600 text-white font-bold font-serif py-3 rounded mt-6 hover:bg-red-700 transition">
                Proceed to Checkout
              </button>
              <Link to="/">
                <a className="block text-center text-red-600  font-bold font-serif mt-4 hover:underline">
                  Continue Shopping
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};
