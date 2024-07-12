import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function FarmerInfo() {
  return (
    <div className="font-popins px-9 py-4">
        <Navbar />
      <div className="max-w-full p-6 bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center">
        <div className="flex-shrink-0 max-w-8xl">
          <img
            src="https://rupyanivesh.com/wp-content/uploads/2024/02/AdobeStock_432151892_Preview.jpeg"
            alt="Farmer"
            className="w-72 h-72  rounded-lg object-cover"
          />
        </div>
        <div className="mt-4 md:mt-0 md:ml-6 flex-grow">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-black">Raghu M</h1>
            <span className="ml-2 text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
          </div>
          <p className="text-gray-600">FARMER</p>
          <p className="mt-4 text-gray-700">
            I am a dedicated farmer with a passion for cultivating the land and
            nurturing crops. With years of hands-on experience, I prioritize
            sustainable farming practices and innovation to ensure high-quality
            yields. My commitment to agriculture stems from a deep respect for
            nature and a desire to contribute to food security and community
            well-being. I embrace challenges with resilience and continually
            strive to adapt to changing agricultural landscapes.
          </p>
          <br />
          <h2 className="text-lg font-semibold text-black">Crops Grown</h2>
          <div className="mt-4 ">
            <div className="grid grid-cols-6 gap-0">
              <div className="col-span-1">
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>Tomato</li>
                  <li>Onion</li>
                  <li>Carrot</li>
                  <li>Potato</li>
                  <li>Watermelon</li>
                </ul>
              </div>
              <div className="col-span-1">
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>Mango</li>
                  <li>papaya</li>
                  <li>Watermelon</li>
                  <li>pomogranete</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-full p-6 bg-white rounded-lg shadow-md flex gap-32 items-center ">
        <div className="grid grid-rows-2">
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-black">
              Contact Details:
            </h2>
            <p className="text-gray-700">Phone: +91 966 455 4444</p>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-black">Place:</h2>
            <p className="text-gray-700">Kadaluru</p>
            <p className="text-gray-700">
              Maddur taluk Mandya District - 571433
            </p>
          </div>
        </div>

        <button className="mt-6 px-6 py-3 bg-[#F3FF90] text-black font-semibold rounded-3xl shadow-md hover:bg-[#9BEC00] transition-all focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75">
          Contact Now
        </button>
      </div>
      <Footer/>
    </div>
  );
}

export default FarmerInfo;
