import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./Name-field.css";
import { fields } from "../../Details";
import { linksField } from "../../Details";
import { pronouns } from "../../Details";
import { addInfo } from "../../Details";
import Selection from "../Selection component/Selection";
import { kMaxLength } from "buffer";
import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from '../../firebase';
const Name = () => {
  const [resumeErr, setResumeErr] = useState("");

  const resChange = (e:any) => {
    if (e.target.files[0].size > 5000000) {
      setResumeErr("File size should be less than 5Mb");
    } else if (e.target.files[0].type !== "application/pdf")
      setResumeErr("Only pdf supported");
    else {
      setResumeErr("");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  {
    console.log("errors", errors);
  }

  // const     sampleRegExMail =  new RegExp('^[a-z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,4}$');

  

  return (
    <div className="container">
      <div className="sub-container">
        <div className="field-heading">SUBMIT YOUR APPLICATION</div>

        <form onSubmit={handleSubmit(async (data) => {
          console.log(JSON.stringify(data))
        await addDoc(collection(db, "test"), {
          "test": JSON.stringify(data),    
        }); 

        await getDocs(collection(db, "test"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));            
                console.log(newData);
            })
        })}>
          <div className="field-input">
            <div className="fieldName">
              Resume/CV <span style={{ color: "red" }}>*</span>
            </div>
            <div className="field-input-box">
              <button id="resBtn">
                <input
                  id="inputBtn"
                  style={{ cursor: "pointer" }}
                  required
                  {...register("Resume")}
                  type="file"
                  onChange={resChange}
                />
                <i className="fa-solid fa-paperclip"></i> &nbsp;ATTACH RESUME /
                CV
              </button>

              <p>{resumeErr}</p>
            </div>
          </div>

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
                      {...register(item.label, {
                        required: {
                          value: item.required,
                          message: "Please fill this input",
                        },
                        //   fileSize:{
                        //     value:item.maxFileSize,
                        //     message:'cxc'
                        // },
                        minLength: {
                          value: item.min ?? 0,
                          message: "Name should be of more than 10 words",
                        },
                        pattern: {
                          value: item.regExVal,
                          message: item.message ?? "",
                        },
                      })}
                      type={item.type}
                      className="text-box"
                      placeholder={item.placeholder}
                    />
                    {errors[item.label] && <p>{String(errors[item.label]?.message)}</p>}
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
                      {...register(item.label, {
                        pattern: {
                          value: item.pattern,
                          message: "Invalid URL",
                        },
                      })}
                      type={item.type}
                      className="text-box"
                      placeholder={item.placeholder}
                      required={item.required}
                    />
                    {errors[item.label] && <p>{String(errors[item.label]?.message)}</p>}
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
                        {...register(item.name, {
                          required: false,
                          minLength: {
                            value: 30,
                            message: "min 30 characters",
                          },
                        })}
                        // type={item.type}
                        className="text-box-addInfo"
                        placeholder={item.placeholder}
                        required={item.required}
                      />
                      <p>{String(errors[item.name] && errors[item.name]?.message)}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <Selection register={register} />
        </form>
      </div>
    </div>
  );
};

export default Name;
