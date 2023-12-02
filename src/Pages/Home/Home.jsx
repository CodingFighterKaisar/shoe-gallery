import React from "react";
import Sliders from "../../Component/Sliders/Sliders";
import Categories from "../../Component/Categories/Categories";
import Products from "../../Component/OurProducts/Products";
import Partners from "../../Component/Partners/Partners";
import LatestNews from "../../Component/LatestNews/LatestNews";
import Gallery from "../../Component/Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Sliders></Sliders>
      <Categories></Categories>
      <Products></Products>
      <Partners></Partners>
      <LatestNews></LatestNews>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
