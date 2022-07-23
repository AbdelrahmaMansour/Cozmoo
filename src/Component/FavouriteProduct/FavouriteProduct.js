import React from "react";
import "./FavouriteProduct.css";
import { removeFromFavourite } from "../../redux/actions";
import { useDispatch } from "react-redux";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

function FavouriteProduct({ id, title, image, rating, price, hideButton }) {
  let dispatch = useDispatch();
  const removeItemFromFavourite = () => {
    dispatch(removeFromFavourite(id));
  };

  return (
    <div className="favourite-product">
      <img src={image} alt="" className="checkout-product-image" />
      <div className="favourite-product-info">
        <p className="favourite-product-title">{title}</p>
        <p className="favourite-product-price">
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
        <div className="favourite-product-rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeItemFromFavourite}>
            <i>
              <ShoppingCartOutlinedIcon />
            </i>
            Remove from Favourite
          </button>
        )}
      </div>
    </div>
  );
}
export default FavouriteProduct;
