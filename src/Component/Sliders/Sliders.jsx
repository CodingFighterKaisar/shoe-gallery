import React, { useState } from "react";
import collection from "../../assets/images/carousel/collection.jpg";
import choice from "../../assets/images/carousel/choice.jpg";
import footwear from "../../assets/images/carousel/footwear.jpg";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";
import { RxDotFilled } from "react-icons/rx";

const Sliders = () => {
  const slides = [
    {
      slideId: 1,
      slideImg: collection,
      slideTitle: "collection",
      slideTest:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa tempora ullam quidem, magni delectus, incidunt voluptate natus aut enim perspiciatis, tenetur quaerat ex aliquid maiores corporis provident quia? Dolorem!",
    },
    {
      slideId: 2,
      slideImg: choice,
      slideTitle: "Your Choice",
      slideTest:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa tempora ullam quidem, magni delectus, incidunt voluptate natus aut enim perspiciatis, tenetur quaerat ex aliquid maiores corporis provident quia? Dolorem!",
    },
    {
      slideId: 3,
      slideImg: footwear,
      slideTitle: "footwear",
      slideTest:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa tempora ullam quidem, magni delectus, incidunt voluptate natus aut enim perspiciatis, tenetur quaerat ex aliquid maiores corporis provident quia? Dolorem!",
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
    <div className="w-full relative group py-4">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].slideImg})` }}
        alt=""
        className="w-[95%] h-[550px] mx-auto rounded-2xl bg-center bg-cover duration-500"
      >
        <div className="h-full flex justify-center items-center ">
          <div className="flex flex-col gap-4 justify-center lg:w-full lg:h-full sm:w-full  rounded-lg bg-opacity-60 sm:p-4 shadow-2xl bg-gray-400 ">
            <div className="w-2/4 mx-auto flex flex-col justify-center items-center gap-6 ">
              <h2 className="lg:text-5xl md:text-2xl rounded-lg sm:text-2xl font-bold sm:font-bold text-center text-yellow-900 shodow-xl">
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
        {slides.map((slide) => (
          <div className="text-2xl cursor-pointer">
            <RxDotFilled
              key={slide.slideId}
              onClick={() => goToSlide(slideIndex)}
            ></RxDotFilled>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sliders;
