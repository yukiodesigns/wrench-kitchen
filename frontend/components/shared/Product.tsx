import React from 'react'

const Product = () => {
  const products = [
    { id: 1, name: 'Chocolate Cake', price: '$15', image: '/chocolate-cake.jpg', badge: 'Offer' },
    { id: 2, name: 'Blueberry Muffin', price: '$5', image: '/blueberry-muffin.jpg', badge: 'In Stock' },
    // Add more products as needed
  ];

  return (
    <div className="bg-creamWhite py-20">
      <div className="container mx-auto px-4">
        {/* Title and Button */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl text-darkGray font-semibold">Our Pastries</h2>
          <a 
            href="/products" 
            className="bg-softPink text-darkGray py-2 px-6 rounded-full font-semibold text-lg hover:bg-lightPink transition duration-300 ease-in-out"
          >
            View All
          </a>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg text-darkGray font-semibold mb-2">{product.name}</h3>
                <p className="text-darkGray mb-2">{product.price}</p>
                <span className={`bg-${product.badge === 'Offer' ? 'yellow' : 'green'}-500 text-white py-1 px-2 rounded-full text-xs font-semibold`}>
                  {product.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product