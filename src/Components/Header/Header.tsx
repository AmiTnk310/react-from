import React from "react";
import'./Header.css';
import img from "../image/renderLogo.png"

const Header =()=>{
    return(
        <div className="container-header">
            <div className="logo">
                    <img src={img} alt="" />
                </div>
        <div className="sub-container-header">
              <div id="empty"></div>
                <div className="heading">
                  <div className="main-heading">
                           <span id="main-heading"> Full-Stack Engineer</span>
                  </div>
                  <div className="sub-heading">
                  REMOTE OPTIONAL /PRODUCT - ENGINEERING /FULL-TIME
                  </div>

                </div>

        </div>
      </div>
    )

}

export default Header;