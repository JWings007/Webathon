import React from "react";
import Payment from '../assets/payment.png'

function Footer() {
  return (
    <footer className="bg-[#F3FF90] p-8 mt-20 px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="mr-8">
          <h2 className="text-lg font-semibold">AgroFlow</h2>
          <p className="mt-2">
            Welcome to FarmLink, your one-stop platform for connecting farmers
            with reliable food supply and maintenance services.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Vegetables</h3>
          <ul className="mt-2">
            <li>Tomato | Potato | Sweet potato</li>
            <li>Onion | Ginger | Garlic</li>
            <li>Cabbage | Cauliflower |</li>
            <li>Beans | Chilli |</li>
            <li>Tomato</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Fruits</h3>
          <ul className="mt-2">
            <li>Apple | Orange</li>
            <li>Banana | Grapes | Pomegranate</li>
            <li>Watermelon | Strawberry</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Dry Fruits</h3>
          <ul className="mt-2">
            <li>Walnuts | Pista</li>
            <li>Cashew | Peanuts | Anjura</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center mt-8">
        <div className="flex flex-col items-start">
            <h1 className="font-bold text-xl">We accept</h1>
          <img src={Payment} alt="" className="w-3/4"/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
