import React from "react";
import Product from "./Product";
import blacksneaker from "../../assets/images/shoes/blacksneaker.jpg";
import bluesneaker from "../../assets/images/shoes/bluesneaker.jpg";
import femalehighheel from "../../assets/images/shoes/femalehighheel.jpg";
import Ladiestoeopen from "../../assets/images/shoes/Ladiestoeopen.jpg";
import leatherbrogues from "../../assets/images/shoes/leatherbrogues.jpg";
import menstyle1 from "../../assets/images/shoes/menstyle1.jpg";
import menstyle2 from "../../assets/images/shoes/menstyle2.jpg";
import urbansneaker from "../../assets/images/shoes/urbansneaker.jpg";
import whitesneaker from "../../assets/images/shoes/whitesneaker.jpg";
import womanboot from "../../assets/images/shoes/womanboot.jpg";
import womenjewel from "../../assets/images/shoes/womenjewel.jpg";
import addidas from "../../assets/images/shoes/addidas.jpg";
import airjordan from "../../assets/images/shoes/airjordan.jpg";
import brogue from "../../assets/images/shoes/brogue.jpg";
import louis from "../../assets/images/shoes/louis.jpg";
import nikefree from "../../assets/images/shoes/nikefree.jpg";
import nikon from "../../assets/images/shoes/nikon.jpg";


const Products = () => {

  const Products = [
    { id: 1, title: "Black Sneaker", price: 41, rating: "***", img: blacksneaker },
    { id: 2, title: "Blue Sneaker", price: 37, rating: "***", img: bluesneaker },
    { id: 3, title: "Female High Heel", price: 29, rating: "****", img: femalehighheel },
    { id: 4, title: "Ladies toe open", price: 60, rating: "*****", img: Ladiestoeopen },
    { id: 5, title: "Leather Brogues", price: 30, rating: "****", img: leatherbrogues },
    { id: 6, title: "Mens Choice", price: 40, rating: "***", img: menstyle1 },
    { id: 7, title: "Mens chandle", price: 34, rating: "***", img: menstyle2 },
    { id: 8, title: "Urban Sneaker", price: 54, rating: "****", img: urbansneaker },
    { id: 9, title: "White Sneaker", price: 34, rating: "****", img: urbansneaker },
    { id: 10, title: "Women Boot", price: 34, rating: "***", img: womanboot },
    { id: 11, title: "Women Jewel", price: 24, rating: "***", img: womenjewel },
    { id: 12, title: "Women Jewel", price: 57, rating: "*****", img: addidas },
    { id: 13, title: "Air Jordan", price: 45, rating: "*****", img: airjordan },
    { id: 14, title: "Brogue Late", price: 65, rating: "****", img: brogue },
    { id: 15, title: "Louis", price: 26, rating: "***", img: louis },
    { id: 16, title: "Nike Free", price: 66, rating: "*****", img: nikefree },
    { id: 17, title: "Nikon", price: 36, rating: "****", img: nikon },
    { id: 18, title: "whitesneaker", price: 16, rating: "***", img: whitesneaker },
  ];

  const handleShowMoreBtn = () => {
    console.log("its working")
    let totalProduct = []
    for (let i = 0; i <= Products.length; i++) {
      totalProduct = [i]
    }
  }
  return (
    <div className="flex flex-col gap-8 justify-start items-left ">
      <h2 className="text-4xl font-bold text-orange-600 py-10 p-10">
        Our Trending Products
      </h2>
      <div className="grid grid-cols-4 gap-4 container mx-auto">
        {Products.map((product) => (
          <Product key={product.id} product={product}></Product>
        )).slice(0, 4)}
      </div>
      <div className="flex justify-center items-center">
        <button onClick={handleShowMoreBtn} className="text-xl bg-gray-500 hover:bg-slate-700 w-32 px-2 py-2 rounded-md text-white hover:text-orange-600">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Products;
