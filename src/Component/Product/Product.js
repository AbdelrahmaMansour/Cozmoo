import React,{useState} from "react";
import ShoppingCartOutlinedIcon  from "@material-ui/icons/ShoppingCartOutlined"
import {Link} from 'react-router-dom'
import "./Product.css"
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/actions";
import { addToFavourite } from "../../redux/actions";
import { removeFromFavourite } from '../../redux/actions'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'

const Product =({ id,title,price, image,rating,specification,detail}) => {

  const [flag, setflag] = useState(1)
  let dispatch = useDispatch()
  const removeItemFromFavourite = () => {
    dispatch(removeFromFavourite(id))
  }
  const addToBasketItem = () => {
    const item = {
      id,
      title,
      image,
      price,
      rating,
      specification,
      detail,
    }
    dispatch(addToBasket(item))
  }
  const addToFavouriteItem = () => {
    setflag(flag+1)
    if (flag%2!==0){
    const item = {
      id,
      title,
      image,
      price,
      rating,
      specification,
      detail,
    }
    dispatch(addToFavourite(item))}
    else
    {removeItemFromFavourite()}
  }

     return (
      <div className='product'>
      <div className='info'>
        <Link to={`/product/${id}`} className='title'>
          <p>{title}</p>
        </Link>

        <p className='price'>
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
        <div className='rating'>
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt='' />
      <button onClick={addToBasketItem}>
        <i>
          <ShoppingCartOutlinedIcon />
        </i>
        Add to Basket
      </button>
      <span onClick={addToFavouriteItem}>
        {flag % 2 == 0 ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </span>
    </div>
          
     )
}
export default Product
