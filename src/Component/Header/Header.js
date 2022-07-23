import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useSelector, useDispatch } from "react-redux";
import { logoutInitiate } from "../../redux/actions";
import Logo from "../../logo.svg";

function Header({onSearch,onSetsearchfor}) {
  const { basket,favourite, user } = useSelector((state) => state.data);
  let dispatch = useDispatch();
  const handleAuthentication = () => {
    if (user) {
      dispatch(logoutInitiate());
    }
  };
  return (
    <nav className='header'>
      <Link to='/'>
        <img className='header-logo' alt='cozmoo' src={Logo} />
      </Link>
      
      <div className='search'>
        <input type='text' className='searchInput'   onChange={(e) => onSetsearchfor(e.target.value)}/>
        <SearchIcon className='searchIcon'  onClick={onSearch} />
      </div>
      <div className='header-nav'>
        <Link to={`${user ? '/' : '/login'}`} className='header-link'>
          <div onClick={handleAuthentication} className='header-option'>
            <span className='header-option1'>
              Hello {!user ? 'Guest' : user.email}
            </span>
            <span className='header-option2'>
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>
        <Link to='/orders' className='header-link'>
          <div className='header-option'>
            <span className='header-option1'>Returns</span>
            <span className='header-option2'>& Orders</span>
          </div>
        </Link>
        <Link to='/favourite' className='header-link'>
          <div className='header-option'>
            <span className='header-option11'>Favourite</span>
            <span className='header-option2'>
              {favourite && favourite.length}
            </span>
          </div>
        </Link>
        <Link to='/checkout' className='header-link'>
          <div className='header-basket'>
            <ShoppingCartOutlinedIcon />
            <span className='header-option2 basket-count'>
              {basket && basket.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
