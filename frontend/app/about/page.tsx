import Head from 'next/head';
import Link from 'next/link';
import React from 'react'


const About = () => {
  return (
    <div>
      <Head>
        <title>About Us - Your Pastry Website</title>
      </Head>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <nav className="text-sm" aria-label="Breadcrumb">
              <ol className="list-none p-0 inline-flex">
                <li className="flex items-center">
                  <Link href="/">
                    <p className="text-gray-400 hover:text-white">Home</p>
                  </Link>
                  <svg className="fill-current w-4 h-4 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7.293 5.293a1 1 0 0 1 1.414 0L12 8.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"/></svg>
                </li>
                <li>
                  <span className="text-white">About Us</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <p className="text-gray-700 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis justo ac dui commodo, at fermentum felis pharetra. Duis pulvinar, risus id mollis varius, erat turpis sollicitudin tortor, eget gravida mauris est ut libero.
          </p>
          {/* Add more content for Our Story section */}
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Mission</h2>
          <p className="text-gray-700 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis justo ac dui commodo, at fermentum felis pharetra. Duis pulvinar, risus id mollis varius, erat turpis sollicitudin tortor, eget gravida mauris est ut libero.
          </p>
          {/* Add more content for Mission section */}
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Vision</h2>
          <p className="text-gray-700 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis justo ac dui commodo, at fermentum felis pharetra. Duis pulvinar, risus id mollis varius, erat turpis sollicitudin tortor, eget gravida mauris est ut libero.
          </p>
          {/* Add more content for Vision section */}
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Values</h2>
          <p className="text-gray-700 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis justo ac dui commodo, at fermentum felis pharetra. Duis pulvinar, risus id mollis varius, erat turpis sollicitudin tortor, eget gravida mauris est ut libero.
          </p>
          {/* Add more content for Values section */}
        </div>
      </section>

      {/* Community Engagement Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Community Engagement</h2>
          <p className="text-gray-700 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis justo ac dui commodo, at fermentum felis pharetra. Duis pulvinar, risus id mollis varius, erat turpis sollicitudin tortor, eget gravida mauris est ut libero.
          </p>
          {/* Add more content for Community Engagement section */}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Team</h2>
          <div className="flex flex-col md:flex-row">
            {/* First team member */}
            <div className="md:w-1/2 mb-8">
              <div className="md:flex">
                <img src="/team-member1.jpg" alt="Team Member 1" className="md:w-1/3 md:mr-4" />
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                  <p className="text-gray-700 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis justo ac dui commodo, at fermentum felis pharetra.
                  </p>
                </div>
              </div>
            </div>
            {/* Second team member */}
            <div className="md:w-1/2 mb-8">
              <div className="md:flex flex-row-reverse">
                <img src="/team-member2.jpg" alt="Team Member 2" className="md:w-1/3 md:ml-4" />
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
                  <p className="text-gray-700 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis justo ac dui commodo, at fermentum felis pharetra.
                  </p>
                </div>
              </div>
            </div>
            {/* Third team member */}
            <div className="md:w-1/2">
              <div className="md:flex">
                <img src="/team-member3.jpg" alt="Team Member 3" className="md:w-1/3 md:mr-4" />
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
                  <p className="text-gray-700 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis justo ac dui commodo, at fermentum felis pharetra.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About