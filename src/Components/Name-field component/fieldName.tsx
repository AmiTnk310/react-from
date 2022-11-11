import React from "react";
import { useForm } from "react-hook-form";
import "./Name-field.css";
import { fields } from "../../Details";
import { linksField } from "../../Details";
import { pronouns } from "../../Details";
import { addInfo } from "../../Details";
import Selection from "../Selection component/Selection";
import { kMaxLength } from "buffer";
const Name = () => {

  const { register, handleSubmit, formState:{errors} } = useForm();
  {console.log("errors",errors)}

    const     sampleRegExMail =  new RegExp('^[a-z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,4}$');

  return (
    <div className="container">
      <div className="sub-container">
        <div className="field-heading">SUBMIT YOUR APPLICATION</div>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          {fields.map((item, pos) => {
            return (
              <>
                <div className="field-input">
                  <div className="fieldName">
                    {item.label}

                    {item.required === true ? (
                      <div>
                        <span className="required">*</span>
                      </div>
                    ) : null}
                  </div>
                  <div className="field-input-box">
                    <input
                      {...register(item.label,{required:{
                          value:item.required,
                          message:"Please fill this input"
                        },
                        minLength:{
                          value:item.min ?? 0,
                          message:"Name should be of more than 10 words"
                        },
                        pattern:{
                          value:item.mailVal,
                          message:"Invalid Email  "
                        }
                        // maxLength:{
                        //   value:item.maxN ,
                        //   message:"Phone number not valid"
                        // }
                       
                       
                    })}
                      type={item.type}
                      className="text-box"
                      placeholder={item.placeholder}
                      

                    />
                    {
                      errors[item.label] && <p>{errors[item.label]?.message}</p>
                      
                    }
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
                      {...register(item.label , { pattern:{
                        value:item.pattern,
                        message:"Invalid URL"
                      }

                      })}
                      type={item.type}
                      className="text-box"
                      placeholder={item.placeholder}
                      required={item.required}
                    />
                     {
                      errors[item.label] && <p>{errors[item.label]?.message}</p>
                      
                    }
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
                        // {...register(item.name ?? '')} if property in interface is optional
                        {...register(item.name)}
                        type={item.type}
                        className="text-box-pronoun"
                        placeholder={item.placeholder}
                        required={item.required}
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
                    <div className="fieldName-addInfo">{}</div>
                    <div className="field-input-box-addInfo">
                      <textarea
                        {...register(item.name)}
                        // type={item.type}
                        className="text-box-addInfo"
                        placeholder={item.placeholder}
                        required={item.required}
                      />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <Selection register = {register}/>
        </form>
      </div>
    </div>
  );
};

export default Name;
