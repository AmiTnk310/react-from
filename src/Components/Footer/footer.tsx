import React from "react";
import './footer.css'
import img from "../image/logo.jpg"

const Footer = ()=>{
    return(
        <div className="container-footer">
      <div className="sub-container-footer ">
        <div className="link"><a href="#">Render Home page </a></div>
        <div className="credits">
        <p>Jobs Powered By <img src={img} alt="" /></p>
            </div>
       
      </div>
    </div>
    )
}

export default Footer;