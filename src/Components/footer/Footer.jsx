import styles from "./footer.module.scss";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import React from "react";
import crown from "../../assets/084 crown.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.first}>
        <h3 className={styles.title}>SUBSCRIBE TO OUR NEWSLETTER</h3>
        <p className={styles.text}>
          Recieve exclusive promotion , private sales and news
        </p>
        <input type="text" placeholder="Enter your email" />
        <div className={styles.socials}>
          <FaFacebook />
          <FaInstagram />
          <FaLinkedinIn />
          <FaTiktok />
        </div>
      </div>
      <div className={styles.second}>
        <img className={styles.logoImage} src={crown} alt="crown" />
        <h1 className={styles.logo}>REGAL CLOTHING</h1>
        <p className={styles.location}>NIGERIA</p>
        <div className={styles.line1}>
          <span>About Us</span>
          <span>FAQ</span>
          <span>Contact Us</span>
          <span>Returns</span>
          <span>Offers</span>
          <span>Shops</span>
        </div>
        <div className={styles.line2}>
          <span>Work With Us</span>
          <span>Terms and Conditions</span>
          <span>Contact Us</span>
        </div>
        <div className={styles.line3}>
          <span>Orders and Delivery</span>
          <span>Payment and Pricing</span>
        </div>
        <div className={styles.credit}>
          <div>
            <p>© Seyi.dev - All rights reserved</p>
          </div>
        </div>
        {/* <div className={styles.buttons}>
            <button></button>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
