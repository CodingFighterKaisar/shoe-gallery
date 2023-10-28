import React, { useState } from "react";
import kidzShoe from "../../assets/images/carousel/kidz.jpg";
import formalShoe from "../../assets/images/carousel/formal.jpg";
import sportsShoe from "../../assets/images/carousel/style.jpg";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";
import { RxDotFilled } from "react-icons/rx";

const Sliders = () => {
  const slides = [
    {
      slideId: 1,
      slideImg: kidzShoe,
      slideTitle: "Kidz Shoe",
      slideTest: "Kidz Shoe collection are available here",
    },
    {
      slideId: 2,
      slideImg: formalShoe,
      slideTitle: "Formal Shoes",
      slideTest: "Formal Shoes are available here",
    },
    {
      slideId: 3,
      slideImg: sportsShoe,
      slideTitle: "Sports Shoes",
      slideTest: "Sportsl Shoes are available here",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(2);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-9/11 h-[30%] m-auto px-4 relative group py-4">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].slideImg})` }}
        alt=""
        className="w-[95%] h-[550px] mx-auto rounded-2xl bg-center bg-cover duration-500"
      >
        <div className="h-full mx-auto flex justify-center items-center ">
          <div className="flex flex-col gap-4 justify-center mx-20 lg:w-3/6 sm:w-full bg-blue-300 p-6 rounded-lg bg-opacity-60 sm:p-4 shadow-2xl">
            <h2 className="lg:text-5xl md:text-2xl  sm:text-2xl font-bold sm:font-bold text-center bg-gradient-to-r from-red-200 to-red-600 py-2 text-white">
              {slides[currentIndex].slideTitle}
            </h2>
            <p className="text-gray-800 md:text-2xl lg:text-2xl sm:texl-xs text-center py-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
              doloribus, ullam, molestias cumque dolorum molestiae voluptatem
              sint ipsam similique tempore eius
            </p>
            <div className="flex justify-center items-center gap-6 py-2">
              <button className="bg-blue-400 hover:bg-blue-600 px-4 rounded-md  text-lg hover:text-white font-semibold py-2">
                Gallery
              </button>
              <button className="bg-blue-400 hover:bg-blue-600 px-4 rounded-md  text-lg hover:text-white font-semibold py-2">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* left arrow */}
      <div className="hidden group-hover:block absolute top-[50%] left-14 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <GrCaretPrevious onClick={prevSlide} size={20}></GrCaretPrevious>
      </div>
      {/* right arrow */}
      <div className="hidden group-hover:block absolute top-[50%] right-14 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
        <GrCaretNext onClick={nextSlide} size={20}></GrCaretNext>
      </div>
      <div className="flex top-4 justify-center py-2 ">
        {slides.map((slide, slideIndex) => (
          <div className="text-2xl cursor-pointer">
            <RxDotFilled
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            ></RxDotFilled>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sliders;
