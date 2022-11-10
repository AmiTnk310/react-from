import React from "react";
import { useForm } from "react-hook-form";
import "./Name-field.css";
import { fields } from "../../Details";
import { linksField } from "../../Details";
import { pronouns } from "../../Details";
import { addInfo } from "../../Details";
const Name = () => {
  return (
    <div className="container">
      <div className="sub-container">
        <div className="field-heading">SUBMIT YOUR APPLICATION</div>
        {fields.map((item, pos) => {
          return (
            <>
            
              <div className="field-input">
                <div className="fieldName">{item.label}</div>
                <div className="field-input-box">
                  <input
                    type={item.type}
                    className="text-box"
                    placeholder={item.placeholder}
                    required
                  />
                </div>
              </div>
            </>
          );
        })}
        <div className="field-heading">LINKS</div>
        {linksField.map((item, pos) => {
          return (
            <>
              <div className="field-input">
                <div className="fieldName">{item.label}</div>
                <div className="field-input-box">
                  <input
                    type={item.type}
                    className="text-box"
                    placeholder={item.placeholder}
                    required
                  />
                </div>
              </div>
            </>
          );
        })}
        <div className="subContainer">
          <div className="field-heading">PREFERRED PRONOUNS</div>
          {pronouns.map((item, pos) => {
            return (
              <>
                <div className="field-input-addInfo">
                  <div className="fieldName-addInfo">{item.label}</div>
                  <div className="field-input-box-pronoun">
                    <input
                      type={item.type}
                      className="text-box-pronoun"
                      placeholder={item.placeholder}
                      required
                    />
                  </div>
                </div>
              </>
            );
          })}
          <div className="field-heading">ADDITIONAL INFORMATION</div>
          {addInfo.map((item, pos) => {
            return (
              <>
                <div className="field-input-addInfo">
                  <div className="fieldName-addInfo">{item.label}</div>
                  <div className="field-input-box-addInfo">
                    <textarea
                      // type={item.type}
                      className="text-box-addInfo"
                      placeholder={item.placeholder}
                      required
                    />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Name;
