import React from "react";
import Sliders from "../../Component/Sliders/Sliders";
import Brands from "../../Component/Brands/Brands";
import Categories from "../../Component/Categories/Categories";
import Products from "../../Component/OurProducts/Products";

const Home = () => {
  return (
    <div>
      <Sliders></Sliders>
      <Categories></Categories>
      <Products></Products>
      <Brands></Brands>
    </div>
  );
};

export default Home;
