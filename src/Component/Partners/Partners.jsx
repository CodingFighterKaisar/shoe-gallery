import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import addidas from "../../assets/images/brand/addidas.png";
import apex from "../../assets/images/brand/apex.png";
import Bata from "../../assets/images/brand/Bata.png";
import bayemperium from "../../assets/images/brand/bayemperium.png";
import gucci from "../../assets/images/brand/gucci.png";
import jenny from "../../assets/images/brand/jenny.png";
import lotto from "../../assets/images/brand/lotto.png";
import Nike from "../../assets/images/brand/Nike.png";
import reebok from "../../assets/images/brand/reebok.png";

const Partners = () => {
  const brands = [
    {
      brandId: 1,
      brandImg: addidas,
    },
    {
      brandId: 2,
      brandImg: apex,
    },
    {
      brandId: 3,
      brandImg: Bata,
    },
    {
      brandId: 4,
      brandImg: bayemperium,
    },
    {
      brandId: 5,
      brandImg: gucci,
    },
    {
      brandId: 6,
      brandImg: jenny,
    },
    {
      brandId: 7,
      brandImg: lotto,
    },
    {
      brandId: 8,
      brandImg: Nike,
    },
    {
      brandId: 9,
      brandImg: reebok,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
  };
  return (
    <div className="w-full mx-auto ">
      <h2 className="text-4xl text-center text-yellow-600 font-bold uppercase py-10">
        Our Local Partners
      </h2>
      <div className="mx-auto container-sm px-10">
        <Slider {...settings} className="py-10">
          {brands.map((brand, i) => (
            <div key={i} className="">
              <div className="h-32 w-32 flex justify-center items-center mx-auto bg-blue-200 p-4 rounded-full border-4 border-red-200">
                <img className="w-full " src={brand.brandImg} alt="" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Partners;
