import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
// import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasketIcon'; {/* <ShoppingBasketIcon /> */}
import LocalGroceryStoreRoundedIcon from '@material-ui/icons/LocalGroceryStoreRounded';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {
    const [{ basket, user }] = useStateValue();

    const login = () => {
       if (user) {
           auth.signOut();
       }
    };

    return  <nav className="header">
            
        {/* logo on the left -> img  */}
        <Link to="/">
        <img className="header__logo" src="./images/logo.png" alt="" />
        </Link>

        {/* Search box  */}
        <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
        </div>

        {/* 3 Links  */}
        <div className="header__nav">
        {/* 1st link */}
        <Link to={!user && "/login"} className="header__link">
        <div onClick={login} className="header__option">
        <span className="header__optionLineOne">Hello {user?.email} </span>
        <span className="header__optionLinerTwo">{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>

        {/* 2nd link */}
        <Link to="/" className="header__link">
        <div className="header__option">
        <span className="header__optionLineOne">Reterns</span>
        <span className="header__optionLinerTwo">& Orders</span>
        </div>
        </Link>

        {/* 3rd link */}
        <Link to="/" className="header__link">
        <div className="header__option">
        <span className="header__optionLineOne">Your</span>
        <span className="header__optionLinerTwo">Prime</span>
        </div>
        </Link>

        {/* Basket icon with number   */}
        <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
        { /* Number of items in the basket */ }
        <span className="header__optionLinerTwo header__basketCount">{basket.length}</span>
        { /* Shopping basket Icon */ }
        <LocalGroceryStoreRoundedIcon />
        </div>
        </Link>

        </div>
        
        </nav>
    
}

export default Header
