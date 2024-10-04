"use client";
import React, { useEffect, useRef, useState } from "react";
import Slid from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style}}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick, currentSlide } = props;
  if (currentSlide === 0) {
    return null; 
  }
  return (
    <div
      className={className}
      style={{ ...style}}
      onClick={onClick}
    />
  );
}
export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0); 
  const sliderRef = useRef(null);
  useEffect(() => {
    const handleWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        if (e.deltaX < 0) {
          sliderRef.current.slickPrev();
        } else {
          sliderRef.current.slickNext();
        }
      }
    };
  
    const sliderElement = sliderRef.current?.innerSlider?.list;
    if (sliderElement) {
      sliderElement.addEventListener('wheel', handleWheel);
    }
  
    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);
  
  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 0.5,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    swipe: true,          
    draggable: true, 
    swipeToSlide: true,   
    touchMove: true, 
    afterChange: (index) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 0.5,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 0.5,
          // initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 0.5
        }
      }
    ]
  };

  return (
      <Slid ref={sliderRef} {...settings}>
        {/* Slide 1 */}
        <div className="">
          <div className="grid grid-cols-6 grid-rows-2 gap-4 p-4">
            <div className="relative col-span-1 row-span-2 h-full max-w-sm rounded-lg overflow-hidden  bg-gradient-to-b from-gray-800 to-gray-800 group hover:cursor-pointer">
              <img
                src="/static/assetcl1.jpg"
                alt="Atlanta, GA"
                className="h-full w-full rounded-lg object-cover opacity-70 transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <h2 className="text-xl font-bold font-display text-white">
                  Atlanta, GA
                </h2>
                <a
                  href="#"
                  className="bg-white rounded px-2 py-1 flex w-2/3 bg-opacity-80"
                >
                  <span className="font-display">View Homes </span>
                  <img src="./static/asset10.svg" alt="" className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="col-span-1 bg-lightgray bg-opacity-60 h-48 rounded-lg">
              <div className=" text-white font-display flex flex-col gap-4">
                <div className="ml-3 pt-3 text-base">
                  <p className="font-bold">Trulia User</p>
                  <p>San Francisco Resident</p>
                </div>
                <div className="ml-3 -my-2">
                  <p className="font-light text-lg">
                    I just moved to the neighborhood 2 years ago and love it!
                    It's a great mix of families, seniors and...
                  </p>
                </div>
              </div>
            </div>
            <div className=" relative col-span-1 h-48 overflow-hidden bg-gradient-to-b from-gray-800 to-gray-800 group hover:cursor-pointer rounded-lg">
              <img
                src="/static/assetcl2.jpg"
                alt="Scottsdale, AZ"
                className="h-full w-full rounded-lg object-cover opacity-70 transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <h2 className="text-xl font-bold font-display text-white">
                  Scottsdale, AZ
                </h2>
                <a
                  href="#"
                  className="bg-white rounded px-2 py-1 flex w-2/3 bg-opacity-80"
                >
                  <span className="font-display">View Homes </span>
                  <img src="./static/asset10.svg" alt="" className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="col-span-1 row-span-2 h-full">
              <div className="relative col-span-1 row-span-2 h-full max-w-sm rounded-lg overflow-hidden  bg-gradient-to-b from-gray-800 to-gray-800 group hover:cursor-pointer">
                <img
                  src="/static/assetcl3.jpg"
                  alt="Oakland, CA"
                  className="h-full w-full rounded-lg object-cover opacity-70 transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <h2 className="text-xl font-bold font-display text-white">
                    Oakland, CA
                  </h2>
                  <a
                    href="#"
                    className="bg-white rounded px-2 py-1 flex w-2/3 bg-opacity-80"
                  >
                    <span className="font-display">View Homes </span>
                    <img src="./static/asset10.svg" alt="" className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-1  h-48">
              <div className=" relative col-span-1 h-48 overflow-hidden bg-gradient-to-b from-gray-800 to-gray-800 group hover:cursor-pointer rounded-lg">
                <img
                  src="/static/assetcl4.jpg"
                  alt="Sandy Springs, GA"
                  className="h-full w-full rounded-lg object-cover opacity-70 transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <h2 className="text-xl font-bold font-display text-white">
                    Sandy Springs, GA
                  </h2>
                  <a
                    href="#"
                    className="bg-white rounded px-2 py-1 flex w-2/3 bg-opacity-80"
                  >
                    <span className="font-display">View Homes </span>
                    <img src="./static/asset10.svg" alt="" className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-1  h-48">
              <div className=" relative col-span-1 h-48 overflow-hidden bg-gradient-to-b from-gray-800 to-gray-800 group hover:cursor-pointer rounded-lg">
                <img
                  src="/static/assetcl5.jpg"
                  alt="Carlsbad, CA"
                  className="h-full w-full rounded-lg object-cover opacity-70 transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <h2 className="text-xl font-bold font-display text-white">
                    Carlsbad, CA
                  </h2>
                  <a
                    href="#"
                    className="bg-white rounded px-2 py-1 flex w-2/3 bg-opacity-80"
                  >
                    <span className="font-display">View Homes </span>
                    <img src="./static/asset10.svg" alt="" className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-1  h-48">
              <div className=" relative col-span-1 h-48 overflow-hidden bg-gradient-to-b from-gray-800 to-gray-800 group hover:cursor-pointer rounded-lg">
                <img
                  src="/static/assetcl6.jpg"
                  alt="Austin, TX"
                  className="h-full w-full rounded-lg object-cover opacity-70 transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <h2 className="text-xl font-bold font-display text-white">
                    Austin, TX
                  </h2>
                  <a
                    href="#"
                    className="bg-white rounded px-2 py-1 flex w-2/3 bg-opacity-80"
                  >
                    <span className="font-display">View Homes </span>
                    <img src="./static/asset10.svg" alt="" className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-1  h-48">
              <div className=" relative col-span-1 h-48 overflow-hidden bg-gradient-to-b from-gray-800 to-gray-800 group hover:cursor-pointer rounded-lg">
                <img
                  src="/static/assetcl7.jpg"
                  alt="Boston, MA"
                  className="h-full w-full rounded-lg object-cover opacity-70 transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <h2 className="text-xl font-bold font-display text-white">
                    Boston, MA
                  </h2>
                  <a
                    href="#"
                    className="bg-white rounded px-2 py-1 flex w-2/3 bg-opacity-80"
                  >
                    <span className="font-display">View Homes </span>
                    <img src="./static/asset10.svg" alt="" className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-1 bg-darkgreen  h-48 rounded-lg">
              <div className=" text-white font-display flex flex-col gap-4">
                <div className="ml-3 pt-3 text-base">
                  <p className="font-bold">Brianne</p>
                  <p>Chicago Resident</p>
                </div>
                <div className="ml-3 -my-2">
                  <p className="font-light text-lg">
                    A good mix of young adults/good night life as well as
                    families and family friendly activities...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1  h-48">
              <div className=" relative col-span-1 h-48 overflow-hidden bg-gradient-to-b from-gray-800 to-gray-800 group hover:cursor-pointer rounded-lg">
                <img
                  src="/static/assetcl8.jpg"
                  alt="Newton, MA"
                  className="h-full w-full rounded-lg object-cover opacity-70 transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <h2 className="text-xl font-bold font-display text-white">
                    Newton, MA
                  </h2>
                  <a
                    href="#"
                    className="bg-white rounded px-2 py-1 flex w-2/3 bg-opacity-80"
                  >
                    <span className="font-display">View Homes </span>
                    <img src="./static/asset10.svg" alt="" className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="">
          <div className="grid grid-cols-6 grid-rows-2 gap-4 p-4">
            <div className="relative col-span-1 row-span-2 h-full max-w-sm rounded-lg overflow-hidden  bg-gradient-to-b from-gray-800 to-gray-800 group hover:cursor-pointer">
              <img
                src="/static/assetcl9.jpg"
                alt="Philadelphia, PA"
                className="h-full w-full rounded-lg object-cover opacity-70 transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <h2 className="text-xl font-bold font-display text-white">
                  Philadelphia, PA
                </h2>
                <a
                  href="#"
                  className="bg-white rounded px-2 py-1 flex w-2/3 bg-opacity-80"
                >
                  <span className="font-display">View Homes </span>
                  <img src="./static/asset10.svg" alt="" className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="col-span-1  h-48">
              <div className=" relative col-span-1 h-48 overflow-hidden bg-gradient-to-b from-gray-800 to-gray-800 group hover:cursor-pointer rounded-lg">
                <img
                  src="/static/assetcl10.jpg"
                  alt="Quincy, MA"
                  className="h-full w-full rounded-lg object-cover opacity-70 transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <h2 className="text-xl font-bold font-display text-white">
                    Quincy, MA
                  </h2>
                  <a
                    href="#"
                    className="bg-white rounded px-2 py-1 flex w-2/3 bg-opacity-80"
                  >
                    <span className="font-display">View Homes </span>
                    <img src="./static/asset10.svg" alt="" className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-1 bg-darkblue h-48 rounded-lg">
              <div className=" text-white font-display flex flex-col gap-4">
                <div className="ml-3 pt-3 text-base">
                  <p className="font-bold">Trulia User</p>
                  <p>Chandler Resident</p>
                </div>
                <div className="ml-3 -my-2">
                  <p className="font-light text-lg">
                    We live living in the Oakwood community of Sun Lakes. There are so many activities...
                  </p>
                </div>
              </div>
            </div>
            <div className="relative col-span-1 row-span-2 h-full max-w-sm rounded-lg overflow-hidden  bg-gradient-to-b from-gray-800 to-gray-800 group hover:cursor-pointer">
              <img
                src="/static/assetcl11.jpg"
                alt="Jurupa Valley, CA"
                className="h-full w-full rounded-lg object-cover opacity-70 transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <h2 className="text-xl font-bold font-display text-white">
                  Jurupa Valley, CA
                </h2>
                <a
                  href="#"
                  className="bg-white rounded px-2 py-1 flex w-2/3 bg-opacity-80"
                >
                  <span className="font-display">View Homes </span>
                  <img src="./static/asset10.svg" alt="" className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="col-span-1  h-48">
              <div className=" relative col-span-1 h-48 overflow-hidden bg-gradient-to-b from-gray-800 to-gray-800 group hover:cursor-pointer rounded-lg">
                <img
                  src="/static/assetcl12.jpg"
                  alt="Lowell, MA"
                  className="h-full w-full rounded-lg object-cover opacity-70 transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <h2 className="text-xl font-bold font-display text-white">
                    Lowell, MA
                  </h2>
                  <a
                    href="#"
                    className="bg-white rounded px-2 py-1 flex w-2/3 bg-opacity-80"
                  >
                    <span className="font-display">View Homes </span>
                    <img src="./static/asset10.svg" alt="" className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-1  h-48">
              <div className=" relative col-span-1 h-48 overflow-hidden bg-gradient-to-b from-gray-800 to-gray-800 group hover:cursor-pointer rounded-lg">
                <img
                  src="/static/assetcl13.jpg"
                  alt="San Jose, CA"
                  className="h-full w-full rounded-lg object-cover opacity-70 transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <h2 className="text-xl font-bold font-display text-white">
                    San Jose, CA
                  </h2>
                  <a
                    href="#"
                    className="bg-white rounded px-2 py-1 flex w-2/3 bg-opacity-80"
                  >
                    <span className="font-display">View Homes </span>
                    <img src="./static/asset10.svg" alt="" className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-1  h-48">
              <div className=" relative col-span-1 h-48 overflow-hidden bg-gradient-to-b from-gray-800 to-gray-800 group hover:cursor-pointer rounded-lg">
                <img
                  src="/static/assetcl14.jpg"
                  alt="Anaheim, CA"
                  className="h-full w-full rounded-lg object-cover opacity-70 transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <h2 className="text-xl font-bold font-display text-white">
                    Anaheim, CA
                  </h2>
                  <a
                    href="#"
                    className="bg-white rounded px-2 py-1 flex w-2/3 bg-opacity-80"
                  >
                    <span className="font-display">View Homes </span>
                    <img src="./static/asset10.svg" alt="" className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-1  h-48">
              <div className=" relative col-span-1 h-48 overflow-hidden bg-gradient-to-b from-gray-800 to-gray-800 group hover:cursor-pointer rounded-lg">
                <img
                  src="/static/assetcl15.jpg"
                  alt="Denver, CO"
                  className="h-full w-full rounded-lg object-cover opacity-70 transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <h2 className="text-xl font-bold font-display text-white">
                    Denver, CO
                  </h2>
                  <a
                    href="#"
                    className="bg-white rounded px-2 py-1 flex w-2/3 bg-opacity-80"
                  >
                    <span className="font-display">View Homes </span>
                    <img src="./static/asset10.svg" alt="" className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-1  h-48">
              <div className=" relative col-span-1 h-48 overflow-hidden bg-gradient-to-b from-gray-800 to-gray-800 group hover:cursor-pointer rounded-lg">
                <img
                  src="/static/assetcl16.jpg"
                  alt="Aurora, CO"
                  className="h-full w-full rounded-lg object-cover opacity-70 transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <h2 className="text-xl font-bold font-display text-white">
                    Aurora, CO
                  </h2>
                  <a
                    href="#"
                    className="bg-white rounded px-2 py-1 flex w-2/3 bg-opacity-80"
                  >
                    <span className="font-display">View Homes </span>
                    <img src="./static/asset10.svg" alt="" className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-1 bg-darkviolet h-48 rounded-lg">
              <div className=" text-white font-display flex flex-col gap-4">
                <div className="ml-3 pt-3 text-base">
                  <p className="font-bold">Trulia User</p>
                  <p>San Diego Resident</p>
                </div>
                <div className="ml-3 -my-2">
                  <p className="font-light text-lg">
                    Farmers markets, street fairs, and brewery tours <br/>are great to experience in this area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slid>
  );
}
