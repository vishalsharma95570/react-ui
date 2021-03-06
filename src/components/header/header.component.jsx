import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utilis";
import Cookies from "js-cookie";
import { ReactComponent as Logout } from "../../assets/exit.svg";
import { ReactComponent as User } from "../../assets/user.svg";
import "./header.style.scss";
import "bootstrap/js/src/collapse.js";
import { connect } from "react-redux";
import ApplyCoupon from "../modal/apply-coupon";
const Header = ({ currentUser, hidden }) => {
  const imgStyle = { width: "27px" };
  const isToken = Cookies.get("token");
  const [openApplyCouponModal, setOpenApplyCoupon] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-bg">
      <Link className="logo-container navbar-brand" to="/">
        <img style={imgStyle} src={require("../../assets/logo.png")}></img>

        <span className="home">My Digi Network</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto text-white">
          <li className="nav-item">
            <Link className="option nav-link text-white" to="/">
              Home
            </Link>
          </li>

          {currentUser && (
            <li className="nav-item">
              <Link className="option nav-link text-white" to="/add-friend">
                Contacts
              </Link>
            </li>
          )}
          {currentUser ? (
            ""
          ) : (
            <li className="nav-item">
              <Link className="option nav-link text-white" to="/login">
                Login
              </Link>
            </li>
          )}
          {currentUser ? (
            ""
          ) : (
            <li className="nav-item">
              <Link className="option nav-link text-white" to="/signup">
                Signup
              </Link>
            </li>
          )}
          {currentUser && (
            <li className="nav-item">
              <Link className="option nav-link text-white" to="/profile">
                Profile
              </Link>
            </li>
          )}
          {currentUser && (
            <li className="nav-item">
              <Link className="option nav-link text-white" to="/coupon">
                Coupon
              </Link>
            </li>
          )}
          <li className="nav-item">
            <a
              className="option nav-link text-white"
              href="./app-debug.apk"
              download
            >
              Download Android APK
            </a>
          </li>
          <li className="nav-item">
            <Link className="option nav-link text-white" to="contact-us">
              Help
            </Link>
          </li>
          <li className="nav-item">
            <Link className="option nav-link text-white" to="tnc">
              Terms And Condition
            </Link>
          </li>
          {currentUser ? (
            <li className="nav-item">
              <Link className="option nav-link text-white" to="/logout">
                <Logout style={{ height: "28px" }} />
              </Link>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </nav>
  );
};
const mapStateToPros = ({ user: { currentUser } }) => ({ currentUser });
export default connect(mapStateToPros)(Header);
