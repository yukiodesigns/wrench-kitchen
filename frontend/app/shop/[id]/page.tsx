'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';


const SingleProductPage = () => {
  const router = useRouter();
//   const { productId } = router.query;

  // Dummy product data (replace with actual data from your backend)
  const [product] = useState({
    id: 1,
    name: 'Product Name',
    price: 20,
    image: '/product-image.jpg', // Replace with actual image URL
    description: 'Product description goes here',
  });

  const handleCheckout = () => {
    // Redirect to checkout page
    router.push('/checkout');
  };
  const handleCart = () => {
    // Redirect to checkout page
    router.push('/cart');
  };

  return (
    <div className="container mx-auto py-60">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Product Image */}
        <div>
          <img src={product.image} alt={product.name} className="w-full md:max-w-lg mx-auto" />
        </div>

        {/* Product Details */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
          <p className="text-gray-600 mb-4">${product.price}</p>
          <p className="mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            <label htmlFor="quantity" className="mr-2">Quantity:</label>
            <input type="number" id="quantity" className="p-2 border border-gray-300 rounded" min="1" />
          </div>
          <button 
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
            onClick={handleCheckout}
          >
            Checkout
          </button>
          <button 
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
            onClick={handleCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
