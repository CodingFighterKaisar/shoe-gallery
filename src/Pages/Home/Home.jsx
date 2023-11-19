import React from "react";
import Sliders from "../../Component/Sliders/Sliders";
import Categories from "../../Component/Categories/Categories";
import Products from "../../Component/OurProducts/Products";
import Partners from "../../Component/Partners/Partners";

const Home = () => {
  return (
    <div>
      <Sliders></Sliders>
      <Categories></Categories>
      <Products></Products>
      <Partners></Partners>
    </div>
  );
};

export default Home;
