import { useState } from "react";
import { LOGO_URL as URL_LOGO } from "../utils/constants";

const Header = () => {
  const linkText = "Login";
  const [loginLinkText, setLoginLinkText] = useState(linkText);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={URL_LOGO} alt="Brand Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
