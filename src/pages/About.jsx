import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-bold mb-6 text-center ">About Us</h2>
      <p className="mb-4 text-lg text-gray-700">
        Welcome to MF VOGUE, where we believe in providing high-quality products
        that enrich your life. Our journey began in 2019 with a vision to
        inspire confidence and individuality through exceptional design and
        sustainable practices.
      </p>

      <h3 className="text-2xl font-bold mt-6 mb-2 underline">Our Mission</h3>
      <p className="mb-4 text-gray-700">
        At MF VOGUE, our mission is to redefine fashion through a commitment to
        exceptional quality, customer satisfaction, and sustainable practices.
        We believe that every piece of clothing should not only look great but
        also be made to last. Our designs prioritize timeless aesthetics,
        ensuring that our customers feel confident and stylish in every
        situation. We are dedicated to ethical sourcing and environmentally
        friendly production methods. By using sustainable materials and
        supporting fair labor practices, we aim to minimize our ecological
        footprint while empowering communities. Our goal is to create a positive
        impact in the fashion industry, offering products that our customers can
        feel good about wearing. Customer satisfaction is at the heart of
        everything we do. We strive to exceed expectations by providing
        personalized service, transparent communication, and a seamless shopping
        experience. At MF VOGUE, we believe that fashion should not only enhance
        individual style but also promote a sustainable future for our planet.
      </p>
      <h3 className="text-2xl font-bold mt-6 mb-2 underline">Our Values</h3>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>
          <strong>Quality:</strong> We prioritize high standards in everything
          we offer.
        </li>
        <li>
          <strong>Integrity:</strong> We conduct our business with honesty and
          transparency.
        </li>
        <li>
          <strong>Customer Focus:</strong> Our customers are at the heart of
          what we do.
        </li>
        <li>
          <strong>Sustainability:</strong> We are committed to
          environmentally-friendly practices.
        </li>
      </ul>
      <h3 className="text-2xl font-bold mt-6 mb-2 underline">Join Us</h3>
      <p className="text-gray-700">
        We invite you to explore our products and be part of our growing
        community. Together, we can make a difference.
      </p>

      <p className="text-center mt-8">
        <Link to="/shop" className="text-blue-500 hover:underline">
          Visit our Shop
        </Link>
      </p>
    </div>
  );
}

export default About;
