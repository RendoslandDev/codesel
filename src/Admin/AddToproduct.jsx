import React, { useState } from 'react';
import {Link} from 'react-router-dom';

export default function AddToProduct() {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: 0,
    imageurl: '',  // Changed from imageUrl to match your Rust backend
    description: '',
    link: '#',
    category: 1,
    total_quantity: 0,  // Added inventory fields
    bought_quantity: 0
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'total_quantity' || name === 'bought_quantity'
              ? parseFloat(value) || 0
              : name === 'category'
                ? parseInt(value)
                : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: '' });

    try {
      const response = await fetch('http://localhost:8080/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newProduct,
          // Ensure we're using the correct field names expected by your backend
          imageurl: newProduct.imageurl  // Match Rust struct field name
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create product');
      }

      const data = await response.json();
      setSubmitStatus({
        success: true,
        message: 'Product added successfully!'
      });

      // Reset form after successful submission
      setNewProduct({
        name: '',
        price: 0,
        imageurl: '',
        description: '',
        link: '#',
        category: 1,
        total_quantity: 0,
        bought_quantity: 0
      });
    } catch (error) {
      console.error('Error creating product:', error);
      setSubmitStatus({
        success: false,
        message: error.message || 'Failed to add product'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8  " >
        <Link to='/AdminPage' className='w-20 m-2 p-4 rounded text-black uppercase font-serif shadow hover:text-red-500'>back</Link>
      <form onSubmit={handleSubmit}>
        <div className='container font-serif lg:w-1/2 justify-center m-auto p-10 rounded bg-white shadow-lg'>
          {submitStatus.success !== null && (
            <div className={`mb-6 p-4 rounded-lg ${
              submitStatus.success
                ? 'bg-green-100 text-green-800 border border-green-200'
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}>
              {submitStatus.message}
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-sm focus:outline-none pl-4 border-t-2 border-gray-300 focus:border-amber-500"
                placeholder="Enter product name"
                value={newProduct.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                  Price ($)
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  min="0"
                  step="0.01"
                  className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-sm focus:outline-none pl-4 border-t-2 border-amber-600 focus:border-amber-700"
                  placeholder="0.00"
                  value={newProduct.price}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="w-full h-12 text-gray-600 bg-white shadow-sm text-lg font-normal leading-7 rounded border border-gray-300 focus:outline-none focus:ring-amber-500 focus:border-amber-500 pl-2"
                  value={newProduct.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value={1}>Cloud Mattress</option>
                  <option value={2}>Category 2</option>
                  <option value={3}>Category 3</option>
                  <option value={4}>Category 4</option>
                  <option value={5}>Category 5</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="imageurl" className="block text-sm font-medium text-gray-700 mb-1">
                Image URL
              </label>
              <input
                type="url"
                id="imageurl"
                name="imageurl"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-sm focus:outline-none pl-4 border-t-2 border-gray-300 focus:border-amber-500"
                placeholder="https://example.com/image.jpg"
                value={newProduct.imageurl}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="total_quantity" className="block text-sm font-medium text-gray-700 mb-1">
                  Initial Stock Quantity
                </label>
                <input
                  type="number"
                  id="total_quantity"
                  name="total_quantity"
                  min="0"
                  className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-sm focus:outline-none pl-4 border-t-2 border-gray-300 focus:border-amber-500"
                  placeholder="0"
                  value={newProduct.total_quantity}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="bought_quantity" className="block text-sm font-medium text-gray-700 mb-1">
                  Initial Sold Quantity
                </label>
                <input
                  type="number"
                  id="bought_quantity"
                  name="bought_quantity"
                  min="0"
                  className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-sm focus:outline-none pl-4 border-t-2 border-gray-300 focus:border-amber-500"
                  placeholder="0"
                  value={newProduct.bought_quantity}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="w-full text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-xl border border-gray-300 focus:outline-none focus:ring-amber-500 focus:border-amber-500 p-4 font-serif"
                placeholder="Enter product description"
                value={newProduct.description}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full h-12 border ${
                  isSubmitting
                    ? 'bg-gray-300 border-gray-400 text-gray-500'
                    : 'bg-white border-red-500 text-gray-500 hover:bg-red-400 hover:text-white hover:border-red-600'
                } text-base font-serif font-bold leading-6 rounded-lg transition-all duration-300 shadow-sm flex items-center justify-center`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Adding...
                  </>
                ) : (
                  'ADD TO PRODUCT'
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
