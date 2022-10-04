import React from "react";
import { BackTop } from "antd";
import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <React.Fragment>
      <div className="fluid-container">
        <div className="footer">
          <div className="logo">
          <i className="fas fa-home fa-2x">
            <Link to="/">
            </Link>

          </i>
          </div>
          <ul className="social-links">
            <li>
              <a href="https://twitter.com">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="https://facebook.com">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <div className="copyright">
              Copyright &copy; My Place {new Date().getFullYear()}
            </div>
             <BackTop>
              <div className="goTop">
              <i className="fas fa-arrow-circle-up"></i>
              </div>
             </BackTop>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
