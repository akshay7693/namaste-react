import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const linkText = "Login";
  const [loginLinkText, setLoginLinkText] = useState(linkText);
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Brand Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <a
            className="login"
            onClick={() => {
              loginLinkText === linkText
                ? setLoginLinkText("Logout")
                : setLoginLinkText(linkText);
            }}
          >
            {loginLinkText}
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
