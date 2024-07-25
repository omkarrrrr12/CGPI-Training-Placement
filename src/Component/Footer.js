import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h1>Contact Us</h1>
      <div className="footer__container">
        <div className="footer__section">
          <h3>
            <i className="fas fa-map-marker-alt"></i> Address
          </h3>
          <p>
            Office no .1,Ground floor, vishwas ap, near vishwas apt, Govardhan
            Society, Mandar Society, Pune, Maharashtra 411009
          </p>
        </div>
        <hr className="footer__divider" />
        <div className="footer__section">
          <h3>
            <i className="fas fa-envelope"></i> General Enquiry
          </h3>
          <p>Email: cgpisoftware@gmail.com</p>
          <p>Phone: 
            <>
            +91-9921810120 
            +91-7350860743
            </>
          </p>
        </div>
        <hr className="footer__divider" />
        <div className="footer__section">
          <h3>
            <i className="fas fa-envelope"></i> Contact
          </h3>
          <p>Email: cgpisoftware@gmail.com</p>
          <p>Phone: +91-9921810120</p>
        </div>
        <hr className="footer__divider" />
        <div className="footer__section">
          <h3>
            <i className="fas fa-clock"></i> Schedule
          </h3>
          <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p>Saturday: 10:00 AM - 2:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
      <div className="footer__map">
        <iframe
          title="Google Maps Location"
          width="100%"
          height="250px"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242049.83316118148!2d73.84518715980555!3d18.572747355399862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c19ff8fe91e5%3A0xe7654f134e108809!2sCGPI%20SOFTWARE%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1721716793959!5m2!1sen!2sin"
          
        ></iframe>
      </div>
      <p className="copyright">
        Copyright © 2024 My Website. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
