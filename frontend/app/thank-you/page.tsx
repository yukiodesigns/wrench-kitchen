import React from 'react';
import Link from 'next/link';

const ThankYouPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-semibold mb-8">Thank You!</h1>
      <p className="text-lg mb-8">Your order has been successfully placed.</p>
      <Link href="/shop">
        {/* <a className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out"> */}
          Back to Shop
        {/* </a> */}
      </Link>
    </div>
  );
};

export default ThankYouPage;
