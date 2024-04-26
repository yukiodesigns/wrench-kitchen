'use client'
import React, { useState } from 'react';

const CartPage = () => {
  // Dummy cart data (replace with actual data from your backend or state management)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', quantity: 2, image: '/product1.jpg' },
    { id: 2, name: 'Product 2', quantity: 1, image: '/product2.jpg' },
    // Add more cart items as needed
  ]);

  const handleProceedToCheckout = () => {
    // Implement logic to proceed to checkout (e.g., redirect to checkout page)
    console.log('Proceed to checkout');
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-semibold mb-4">Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="flex items-center mb-4">
          <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
          <div>
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        </div>
      ))}
      <button 
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
        onClick={handleProceedToCheckout}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartPage;
