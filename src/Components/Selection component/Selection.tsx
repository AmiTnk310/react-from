import React from "react";
import "./Selection.css";
import { selectionList } from "../../Details";
import { useState } from "react";

const Selection = () => {
  const [details, setDetails] = useState(false);
  const showDetails = () => {
    // alert("sahh")
    setDetails(!details);
  };

  return (
    <div>
      <div className="container-selection">
        <div className="sub-container-selection">
          <div className="usEqual">
            <span id="Bold-text">
              {" "}
              U.S. EQUAL EMPLOYMENT OPPORTUNITY INFORMATION
            </span>{" "}
            (Completion is voluntary and will not subject you to adverse
            treatment)
          </div>
          <div className="detail-text">
            <div id="text">
              Our company values diversity. To ensure that we comply with
              reporting requirements and to learn more about how we can increase
              diversity in our candidate pool, we invite you to voluntarily
              provide demographic information in a confidential survey at the
              end of this application. Providing this information is optional.
              It will not be accessible or used in the hiring process, and has
              no effect on your opportunity for employment.
            </div>
            <div id="selection-form">
             
              {selectionList.map((item, pos) => {
                return (
                  <>
                    <div className="selectMenu">
                      <div
                        className="select-label"
                        onClick={item.name === "race" ? showDetails : () => {}}
                      >
                        {item.label}
                      </div>
                      <div className="select-option">
                        <select name={item.name} id="">
                          {item.options.map((items) => {
                            return <option value="select">{items}</option>;
                          })}
                        </select>
                      </div>
                    </div>

                    {details &&
                      item.heading?.map((item, pos) => {
                        return (
                          <div className="hiding-text">
                            <div className="info-text-heading">{item.head}</div>
                            <div className="info-text-body">{item.text}</div>
                          </div>
                        );
                      })}
                  </>
                );
              })}

             
            </div>
           
          </div>
          <div className="captcha">

          </div>
          <div className="submit-btn">
            <button>SUBMIT APPLICATION</button>
          </div>
        </div>
        
      </div>
      
    </div>
    
  );
};
export default Selection;
