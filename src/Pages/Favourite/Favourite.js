import React from "react";
import "./Favourite.css";
import FavouriteProduct from "../../Component/FavouriteProduct/FavouriteProduct"
import { useSelector } from "react-redux";

function Favourite() {
  const { favourite, user } = useSelector((state) => state.data);
  return (
    <div className="favourite">
      <div className="favourite-left">
        <img
          className="favourite-ad"
          src="https://advertisingweek.com/wp-content/uploads/2021/06/169cart-1170x600.jpg"
          alt=""
        />
        
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="favourite-title">
            {favourite.length === 0
              ? "Your Favourite is Empty"
              : "Your Favourite"}
          </h2>

          {favourite.map((item) => (
            <FavouriteProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favourite;