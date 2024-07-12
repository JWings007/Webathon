import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Tiles() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  useEffect(() => {
    try {
      axios.get("http://localhost:5000/products").then((res) => {
        setData(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div>
      <div className="flex justify-between flex-wrap gap-10">
        {data
          ? data.map((item, i) => {
              return (
                <div key={i}
                  className="w-fit h-fit bg-white shadow-2xl p-5 rounded-xl cursor-pointer"
                  onClick={() => navigate("/product/123")}
                >
                  <img
                    src={item.vegImageLink}
                    alt=""
                    className="w-52 h-52"
                  />
                  <h1 className="text-center font-bold text-xl">{item.vegName}</h1>
                  <p className="text-center text-sm">({item.vegType})</p>
                  <p className="text-center text-lg">1 Kg</p>
                  <h1 className="text-center font-bold text-4xl">
                    {item.price} <sup>₹</sup>
                  </h1>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Tiles;
