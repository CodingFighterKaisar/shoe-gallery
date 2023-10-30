import React from "react";
import Product from "./Product";

const Products = () => {
  return (
    <div className="flex flex-col gap-8 justify-start items-center">
      <h2 className="text-4xl font-bold text-orange-600 py-10 p-10">
        Our Trending Products
      </h2>
      <div className="grid grid-cols-4 gap-4 container mx-auto">
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </div>
      <button className="text-xl bg-gray-500 w-18 px-2 rounded-md text-white">
        Show More
      </button>
    </div>
  );
};

export default Products;
