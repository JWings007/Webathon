import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [userData, setUserData] = useState();
  useEffect(() => {
    const lsData = localStorage.getItem("username");
    if (lsData) setUserData(lsData);
    else setUserData(null);
  }, [navigate, userData]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    setUserData(null)
  };

  return (
    <div className="mb-5">
      <div className="flex items-center justify-between px-20 bg-[#9BEC00] py-4 rounded-xl">
        <div
          className="font-bold text-2xl cursor-pointer"
          onClick={() => navigate("/")}
        >
          AgroFlow
        </div>
        <div>
          <input
            type="text"
            placeholder="Search vegetables, fruits"
            className="pl-5 h-10 w-96 rounded-2xl outline-none"
          />
        </div>
        <div className="flex items-center justify-center gap-6 relative">
          <div>
            <i className="fi fi-rs-shopping-cart text-2xl"></i>
          </div>
          <div onClick={handleToggle} className="cursor-pointer">
            {userData ? (
              <p className="font-bold text-xl pb-2">{userData}</p>
            ) : (
              <i className="fi fi-rr-settings-sliders text-2xl"></i>
            )}
          </div>
          <div
            className={`absolute bg-white top-[5rem] z-50 w-52 transition-all ${
              toggle ? "scale-100" : "scale-0"
            } origin-top`}
          >
            {userData ? (
              <ul>
                <li
                  className="px-6 py-2 cursor-pointer hover:bg-red-300 transition-all"
                  onClick={handleLogout}
                >
                  Logout
                </li>
                <li className="px-6 py-2 cursor-pointer hover:bg-gray-300 transition-all">
                  Settings
                </li>
              </ul>
            ) : (
              <ul>
                <li
                  className="px-6 py-2 cursor-pointer hover:bg-gray-300 transition-all"
                  onClick={() => navigate("/farmer/login")}
                >
                  Farmer Login
                </li>
                <li
                  className="px-6 py-2 cursor-pointer hover:bg-gray-300 transition-all"
                  onClick={() => navigate("/customer/login")}
                >
                  Customer Login
                </li>
                <li className="px-6 py-2 cursor-pointer hover:bg-gray-300 transition-all">
                  Settings
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
