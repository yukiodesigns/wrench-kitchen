'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';


const ProductsPage = () => {
  const router = useRouter();

  // Dummy product data (replace with actual data from your backend)
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 10, image: '/product1.jpg' },
    { id: 2, name: 'Product 2', price: 20, image: '/product2.jpg' },
    { id: 3, name: 'Product 3', price: 30, image: '/product3.jpg' },
    { id: 4, name: 'Product 4', price: 40, image: '/product1.jpg' },
    { id: 5, name: 'Product 5', price: 50, image: '/product2.jpg' },
    { id: 6, name: 'Product 5', price: 60, image: '/product3.jpg' },
    // Add more products as needed
  ]);

  const handleProductClick = () => {
    router.push(`/shop/id`);
    console.log('hello')
  };

  return (
    <div className="container mx-auto py-10">
      {/* Filter Section */}
      <div className="flex justify-between items-center mb-4">
        {/* Price Filter */}
        <select className="p-2 border border-gray-300 rounded">
          <option value="">Filter by Price</option>
          <option value="10">$10 or less</option>
          <option value="20">$20 or less</option>
          <option value="30">$30 or less</option>
        </select>

        {/* Search Bar */}
        <input 
          type="text" 
          placeholder="Search Products" 
          className="p-2 border border-gray-300 rounded flex-grow ml-4"
        />
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white shadow-md rounded p-4 cursor-pointer transition duration-300 ease-in-out hover:shadow-lg"
            onClick={() => handleProductClick()} // Pass product id to handleProductClick
          >
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default ProductsPage;
