import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Footer.css';

import logo from '../assets/images/logo.png';
import freeShipping from '../assets/images/free-shipping-icon.png';
import freshProduce from '../assets/images/fresh-produce-icon.png';
import safetyIcon from '../assets/images/safety-icon.png';

const Footer = () => {
    return (
        <footer>
            <div className="contact-info-section">
                <div className="contact-left">
                    <div className="contact-overlay"></div>
                    <h2>Get in Touch with us</h2>
                    <p>+91 91010 90000</p>
                </div>
                 <div className="small-slant-box"></div>

                <div className="info-right">
                    <div className="info-box">
                        <div className="icon-wrapper ship-box">
                            <img src={freeShipping} alt="Free Shipping" />
                        </div>
                        <div>
                            <h5>Free Shipping</h5>
                            <p>For Orders Above 500</p>
                        </div>
                    </div>

                    <div className="info-box">
                        <div className="icon-wrapper">
                            <img src={freshProduce} alt="Fresh Produce" />
                        </div>
                        <div>
                            <h5>Fresh Produce</h5>
                            <p>Guaranteed Product Warranty</p>
                        </div>
                    </div>

                    <div className="info-box">
                        <div className="icon-wrapper">
                            <img src={safetyIcon} alt="Safety" />
                        </div>
                        <div>
                            <h5>100% Safety & Security</h5>
                            <p>Your Data is Highly Secured</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-main">
                <div className="footer-section about">
                    <img className='brand-name' src={logo} alt="Brand" />
                    <p>
                        Fresh groceries, particularly fruits, vegetables, whole grains, and lean proteins,
                        play a crucial role in nourishing our bodies and promoting overall well-being.
                    </p>
                </div>

                <div className="footer-section links">
                    <h4>NAVIGATE</h4>
                    <ul>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li> 
                        <li><Link to="/terms-conditions">Terms & Conditions</Link></li> 
                        <li><Link to="/terms-conditions">How to Order</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                    </ul>
                </div>

                <div className="footer-section store">
                    <h4>G-STORE</h4>
                    <p>Reg: T21542GST548</p>
                    <p>TIN: 14578452884</p>
                    <p>Email: groceries at doorstep@gmail.com</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Copyrights 2022© Groceries At Doorstep Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;
