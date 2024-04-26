'use client'
import React, { useState } from 'react';

const CheckoutPage = () => {
  // Dummy data for orders (replace with actual data from your backend)
  const [orders] = useState([
    { id: 1, name: 'Product 1', price: 10, quantity: 2 },
    { id: 2, name: 'Product 2', price: 20, quantity: 1 },
    // Add more orders as needed
  ]);

  // Calculate total price
  const totalPrice = orders.reduce((acc, order) => acc + (order.price * order.quantity), 0);

  // Dummy data for payment methods (replace with actual options)
  const paymentMethods = ['Credit Card', 'PayPal', 'Cash on Delivery'];

  const handlePayment = () => {
    // Handle payment logic
    console.log('Payment successful');
  };

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="bg-gray-100 p-6 rounded">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          {orders.map((order) => (
            <div key={order.id} className="flex justify-between mb-2">
              <p>{order.name}</p>
              <p>Quantity: {order.quantity}</p>
            </div>
          ))}
          <hr className="my-4" />
          <p className="text-xl font-semibold">Total Price: ${totalPrice}</p>
        </div>

        {/* Payment and Address */}
        <div className="bg-gray-100 p-6 rounded">
          <h2 className="text-2xl font-semibold mb-4">Payment</h2>
          <select className="p-2 border border-gray-300 rounded mb-4">
            {paymentMethods.map((method) => (
              <option key={method} value={method}>{method}</option>
            ))}
          </select>
          <textarea placeholder="Delivery Address" className="p-2 border border-gray-300 rounded w-full mb-4" />
          <button 
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
            onClick={handlePayment}
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
