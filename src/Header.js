/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__options">
            <span className="header__optionlineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionlineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header__options">
          <span className="header__optionlineOne">Returns</span>
          <span className="header__optionlineTwo">& orders</span>
        </div>
        <div className="header__options">
          <span className="header__optionlineOne">your</span>
          <span className="header__optionlineTwo">prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <AddShoppingCartIcon />
            <span className="header__optionlineTwo header__BasketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
