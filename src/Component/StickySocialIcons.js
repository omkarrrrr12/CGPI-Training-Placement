import React from "react";
import "./StickySocialIcons.css";

const StickySocialIcons = () => {
  return (
    <div className="sticky-social-icons">
      <a href="tel:+919158091199" className="social-icon call">
        <i className="fas fa-phone"></i>
      </a>
      <a href="/" className="social-icon linkedin">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://wa.me/+919921810120" className="social-icon whatsapp">
  <i className="fab fa-whatsapp"></i>
</a>

     
      <a
        href="https://www.instagram.com/cgpitrainings?igsh=MWhoaXAwazR1cTVmdg=="
        className="social-icon instagram"
      >
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  );
};

export default StickySocialIcons;
