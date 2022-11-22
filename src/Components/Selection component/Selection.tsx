import React from "react";
import "./Selection.css";
import { selectionList } from "../../Details";
import { useState } from "react";
import { FieldValues,FieldErrorsImpl, useForm, UseFormRegister } from "react-hook-form";
import { urlToHttpOptions } from "url";
import { validateHeaderValue } from "http";

interface IProps {
  register: UseFormRegister<FieldValues>;
  err:Partial<FieldErrorsImpl<{[x: string]: any;}>>

}

const Selection = ({ register,err }: IProps) => {
 
  const reload =()=>{
    window.location.reload();
  }
  // "saaa",ionErrors", errors);

  const [details, setDetails] = useState(false);
  const showDetails = () => {
    // alert("sahh")
    setDetails(!details);
  };

  const snackBar =()=>{
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

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
                {
                  /* <form onSubmit={handleSubmit((data) => "saaa",> */
                }
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
                        <select
                          {...register(item.name, {
                            required: {
                              value: item.required,
                              message: " *Select any one field",
                            },
                          })}
                        >
                          <option value="">Select...</option>
                          {item.options.map((items, pos) => {
                            return (
                              <option key={pos} value={items}>
                                {items}
                                
                              </option>
                             
                              
                            );
                            
                          }
                          )
                          }
                            
                          
                          
                        </select>
                        {err[item.name] && (<p>{String(err[item.name]?.message)}</p>)}
                    

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
              <div className="submit-btn" onClick={snackBar}>
                <button type="submit">SUBMIT APPLICATION </button>
                
              </div>
              {/* </form> */}
            </div>
          </div>
          <div className="captcha"></div>
        </div>
        <div id="snackbar">Form Data Submitted.</div>
      </div>
    </div>
  );
};
export default Selection;
