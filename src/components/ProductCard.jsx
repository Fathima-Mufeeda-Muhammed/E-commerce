import React from "react";
import { FaStar } from "react-icons/fa";
import { addToCart } from "../redux/CartSlice";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddtoCart = (e, Product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    alert("product added succesfully");
  };
  return (
    <div className="bg-white p-4 shadow rounded relative boreder transform transition-transform duration-300 hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">₹{product.price}</p>
      <div className="flex items-center mt-2">
        <FaStar className="text-yellow-500"></FaStar>
        <FaStar className="text-yellow-500"></FaStar>
        <FaStar className="text-yellow-500"></FaStar>
        <FaStar className="text-yellow-500"></FaStar>
      </div>
      <div
        class="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-500 group text-white text-sm rounded-full hover:w-24 hover:bg-red-700 transition-all"
        onClick={(e) => handleAddtoCart(e, product)}
      >
        <span class="group-hover:hidden">+</span>
        <span class="hidden group-hover:block">Add to cart</span>
      </div>
    </div>
  );
};

export default ProductCard;
