"use client";
import React, { useState, useRef, useEffect } from 'react';
import Slider from "../../components/Slider";

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false); 
  const popupRef = useRef(null); 
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const openPopup = () => {
    setIsPopupOpen(true);
  }
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      closePopup();
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <nav className="flex justify-between items-center  p-2 lg:p-2 fixed bg-gray-100 top-0 left-0 w-full h-16 z-50">
        <div className="flex items-center gap-5">
          <div className="text-lg lg:text-xl  text-gray-800 ml-3">
            <img src="/static/asset6.svg" />
          </div>
          <div className="hidden lg:flex space-x-2 lg:space-x-3 text-gray-600 font-bold font-display">
            <div className="group relative z-50">
              <div>
                <a href="#" className="px-4 py-2 hover:bg-primary hover:text-white rounded" >Buy</a>
              </div>
              <div className="absolute hidden group-hover:block bg-gray-100 z-50 w-32 mt-2 border rounded-md text-left font-thin">
                  <a href="" className="my-2 block  py-1  pl-4 text-sm font-bold">Hyderabad</a>
                  <a href="" className="my-2 block  py-1  pl-4 text-sm text-primary hover:underline hover:bg-graybg">Homes for Sale</a>
                  <a href="" className="my-2 block  py-1  pl-4 text-sm text-primary hover:underline hover:bg-graybg">Open Houses</a>
                  <a href="" className="my-2 block  py-1  pl-4 text-sm text-primary hover:underline hover:bg-graybg">New Homes</a>
                  <a href="" className="my-2 block  py-1  pl-4 text-sm text-primary hover:underline hover:bg-graybg">Recently Sold</a>
                  <hr className='border-1 border-gray-300 mb-2'/>
              </div>
            </div>
            <div className="group relative">
            <div>
            <a href="#" className="px-4 py-2 hover:bg-primary hover:text-white rounded">Rent</a>
            </div>
            <div className="absolute hidden group-hover:block bg-gray-100 z-50 w-40 mt-2 border rounded-md text-left font-thin">
                  <a href="" className="my-2 block  py-1  pl-4 text-sm font-bold">Hyderabad</a>
                  <a href="" className="my-2 block  py-1  pl-4 text-sm text-primary hover:underline hover:bg-graybg">All Rentals</a>
                  <a href="" className="my-2 block  py-1  pl-4 text-sm text-primary hover:underline hover:bg-graybg">Apartments for Rent</a>
                  <a href="" className="my-2 block  py-1  pl-4 text-sm text-primary hover:underline hover:bg-graybg">Houses for Rent</a>
                  <hr className='border-1 border-gray-300 mb-2'/>
                  <a href="" className="my-2 block  py-1  pl-4 text-sm text-primary hover:underline hover:bg-graybg">Post A Rental Listing</a>
              </div>
            </div>
            <div className="group relative">
            <div>
            <a href="#" className="px-4 py-2 hover:bg-primary hover:text-white rounded">Mortgage</a>
            </div>
            <div className="absolute hidden group-hover:block bg-gray-100 z-50 w-44 mt-2 border rounded-md text-left font-thin">
                  <a href="" className="my-2 block  py-1  pl-4 text-sm font-bold">Hyderabad</a>
                  <a href="" className="my-2 block  py-1  pl-4 text-sm text-primary hover:underline hover:bg-graybg">Mortgage Overview</a>
                  <a href="" className="my-2 block  py-1  pl-4 text-sm text-primary hover:underline hover:bg-graybg">Get Pre-Qualified</a>
                  <a href="" className="my-2 block  py-1  pl-4 text-sm text-primary hover:underline hover:bg-graybg">Mortgage Rates</a>
                  <a href="" className="my-2 block  py-1  pl-4 text-sm text-primary hover:underline hover:bg-graybg">Refinance Rates</a>
                  <hr className='border-1 border-gray-300 mb-2'/>
                  <a href="" className="my-2 block  py-1  pl-4 text-sm text-primary hover:underline hover:bg-graybg">Mortgage Calculator</a>
                  <a href="" className="my-2 block  py-1  pl-4 text-sm text-primary hover:underline hover:bg-graybg">Affordability Calculator</a>
                  <a href="" className="my-2 block  py-1  pl-4 text-sm text-primary hover:underline hover:bg-graybg">Refinance Calculator</a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between text-gray-600 font-bold font-display">
          <div className='hidden lg:flex items-center gap-1'>
          <a
            href="#"
            className="px-4 py-2 hover:bg-primary hover:text-white rounded"
          >
            Saved Homes
          </a>
          <a
            href="#"
            className="px-4 py-2 hover:bg-primary hover:text-white rounded"
          >
            Saved Searches
          </a>
          <button className="inline-block border border-gray-400 hover:bg-gray-200 px-4 py-2 rounded-lg">
            Sign up or Log in
          </button>
        </div>
          {/* Mobile Menu */}
          <div className="mx-5">
            <button className="text-gray-600 hover:text-blue-500">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
          </div>
      </nav>
      {/* Image Section */}
      <section className="mx-4 my-16 max-w-full relative h-[90vh] lg:h-[80vh] xl:h-[85vh] bg-cover lg:bg-center  rounded-lg"
        style={{ backgroundImage: "url(/static/asset0.jpeg)" }}>
        {/* <div className="absolute inset-0 bg-gray-800 bg-opacity-5"></div> */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-4 lg:px-0">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-10 text-center max-w-md leading-tight">
            Discover a place you'll love to live
          </h1>
          <div className="flex flex-row  space-y-0 space-x-2 bg-gray-500  font-display text-xl rounded-lg group">
            <button className="px-6 py-2  bg-white text-green group-hover:bg-gray-500 group-hover:text-white hover:bg-white hover:text-green-700  buy-button font-semibold  rounded w-full md:w-auto">
              Buy
            </button>
            <button className="px-4 py-2 hover:bg-white hover:text-green bg-gray-500 rounded  md:w-auto">
              Rent
            </button>
            <button className="px-6 py-2 hover:bg-white hover:text-green bg-gray-500 rounded w-full md:w-auto">
              Sold
            </button>
          </div>
 
          <div className="mt-6 w-full max-w-md relative">
            <div className="flex">
              <input
                type="text"
                className="w-96 h-12 px-4 py-7 text-xl rounded-l-md placeholder-black text-black"
                placeholder="Hyderabad, TG"
                style={{ width: "800%" }}
                onClick={openPopup}
              />
              <button className="px-4 py-2 bg-red-500 rounded-r-md">
                <i className="fa-solid fa-magnifying-glass text-2xl"></i>
              </button>
            </div>
          </div>
          {isPopupOpen && (
          <div ref={popupRef}  className="absolute top-0 md:top-[300px]" id="searchModal">
          <div className="bg-gray-100 border border-gray-300 w-screen h-[75vh] md:w-[550px] md:h-[390px] p-6 rounded-lg">
          <div className="flex -mt-5 -ml-4">
          <div className="text-gray-600 text-xl flex  relative">
          <input  type="text"  placeholder="Search for City, Neighborhood, Zip, Country" 
          className="w-[445px] h-16 py-2 px-6  border-4 border-primary rounded-xl focus:outline-none"/>
          <img src="/static/asset9.svg" className="w-6 h-6 absolute top-5 left-1 -mx-0" />  
          </div>
          <button className="text-primary px-4 py-2 rounded -ml-2 font-display absolute top-5 right-0 bg-white md:static" 
          onClick={closePopup}
          >Cancel</button>
          </div>
          <hr className="w-full border border-gray-300"/>
          <div className="text-primary font-display h-10 py-2 whitespace-nowrap"><i className="fa-solid fa-location-arrow"></i>&nbsp;&nbsp;Current Location</div>
          <hr className="w-full border border-gray-200"/>
          <div className="text-primary font-display h-8 py-2 whitespace-nowrap"><i className="fa-solid fa-car"></i>&nbsp;&nbsp;Search by commute time</div>
            </div>
          </div>
          )}
        </div>
      </section>
      {/* Explore Section */}
      <section className="flex justify-center items-center">
        <div className="text-center mx-1">
          <h1 className="text-4xl font-bold text-gray-700 mb-4 mt-2">
            Explore homes on Trulia
          </h1>
          <p className="text-md text-gray-600">
            Take a deep dive and browse homes for sale, original neighborhood photos, resident
            <br />
            reviews and local insights to find what is right for you.
          </p>
        </div>
      </section>
      {/* Slider Section */}
      <section>
        <Slider />
      </section>
      <section className="mt-10 mx-1">
        <div className="text-center text-4xl font-bold text-gray-700">
          <p>See how Trulia can help</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-10 mb-3">
          <div className="flex flex-col justify-center items-center">
            <img src="/static/asset1.svg" className="w-[150px] h-[150px]" />
            <div className="font-display text-2xl font-bold">Buy a home</div>
            <p className="font-display text-base mt-2 text-center max-w-64 m-auto break-words text-gray-600">
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </p>
            <button className="bg-green rounded-lg px-6 py-2 my-5 w-[175px] text-white font-display font-bold hover:text-green hover:bg-white hover:border border-green">
              Find a home
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="/static/asset2.svg" className="w-[150px] h-[150px]" />
            <div className="font-display text-2xl font-bold">Rent a home</div>
            <p className="font-display text-base mt-2 text-center max-w-64 m-auto break-words text-gray-600">
              With 35+ filters and custom keyword search, Trulia can help you
              easily find a home or apartment for rent that you'll love.
            </p>
            <button className="bg-green rounded-lg px-6 py-2 my-5 w-[175px] text-white font-display font-bold hover:text-green hover:bg-white hover:border border-green">
              Find a rental
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="/static/asset3.svg" className="w-[150px] h-[150px]" />
            <div className="font-display text-2xl font-bold">
              See neighborhoods
            </div>
            <p className="font-display text-base mt-2 text-center max-w-64 m-auto break-words text-gray-600">
              With more neighborhood insights than any other real estate
              website, we've captured the color and diversity of communities.
            </p>
            <button className="bg-green rounded-lg px-6 py-2 my-5 w-[175px] text-white font-display font-bold hover:text-green hover:bg-white hover:border border-green">
              Learn more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
