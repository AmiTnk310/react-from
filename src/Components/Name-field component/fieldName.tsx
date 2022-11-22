import React from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";
import { useState } from "react";
import "./Name-field.css";
import Snackbar from "../snackbar/snackbar";
import axios from "axios";
import { fields } from "../../Details";
import { linksField } from "../../Details";
import { pronouns } from "../../Details";
import { addInfo } from "../../Details";
import Selection from "../Selection component/Selection";
import { kMaxLength } from "buffer";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const Name = () => {
  const [snackMsg, setSnackMsg] = useState<boolean>(false);

  const [resumeErr, setResumeErr] = useState("");
  const [resumeLabel, setResumeLabel] = useState("Attach RESUME/CV");
  const [file, setFile] = useState<File>();

  const [error, setError] = useState(null);
  const [test, setTest] = useState([]);

  const dataAppend = (data: FieldValues) => {
    const storage = getStorage();
    const storageRef = ref(storage, `/Resume/${resumeLabel}`);

    // console.log("fileName -> cloud ", file);
    const uploadTask = uploadBytesResumable(storageRef, file);

    if (file != undefined) {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            Number(snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              // console.log("Upload is paused");
              break;
            case "running":
              // console.log("Upload is running");
              break;
          }
        },
        (error) => {
          switch (error.code) {
            case "storage/unauthorized":
              break;
            case "storage/canceled":
              break;
            case "storage/unknown":
              break;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // console.log("File available at", downloadURL);
            data.Resume = downloadURL;
            addDoc(collection(db, "test1"), data)
              .then(() => {
                setSnackMsg(true);
                setTimeout(function () {
                  setSnackMsg(true);
                  // console.log("showsnack2", snackMsg);
                }, 1000);
                // console.log("showsnack", snackMsg);
              })

              .catch((E) => console.log("OOPSY", E));
          });
        }
      );
    }
  };


  const resChange = (e: any) => {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      setFile(e.currentTarget.files[0]);
      setResumeLabel(e.currentTarget.files[0].name);
    }
    if (e.target.files[0].size > 5000000) {
      setResumeErr("File size should be less than 5Mb");
    } else if (e.target.files[0].type !== "application/pdf") {
      setResumeErr("Only pdf supported");
    } else {
      setResumeErr("");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  {
    // console.log("errors", errors);
  }

  return (
    <div className="container">
      <div className="sub-container">
        <div className="field-heading">SUBMIT YOUR APPLICATION</div>

        <form
          onSubmit={handleSubmit(async (data) => {
            dataAppend(data);

            let formData = new FormData();
            formData.append("files", file);

            axios
              .post("http://localhost:1337/api/upload", formData)
              .then((response) => {
                const fileId = response.data[0];

                axios
                  .post("http://localhost:1337/api/test1s", {
                    data: {
                      fullName: `${data["Full Name"]}`,
                      email: `${data.Email}`,
                      phone: data.Phone,
                      currentCompany: `${data["Current Company"]}`,
                      Linkedin: `${data["LinkedIn URL"]}`,
                      twitter: `${data["Twitter URL"]}`,
                      github: `${data["GitHub URL"]}`,
                      portfolio: `${data["Portfolio URL"]}`,
                      website: `${data["Other Website"]}`,
                      pronoun: data.pronouns,
                      additionalInfo: `${data["additional info"]}`,
                      gender: data.gender,
                      race: data.race,
                      vetStatus: data.status,
                      resume: fileId,
                    },
                  })
                  .then((response) => {
                    // console.log(response, "posted");
                  })
                  .catch((e) => {
                    // console.log("error", e);
                  });
              });
          })}
        >
          <div className="field-input">
            <div className="fieldName">
              Resume/CV <span style={{ color: "red" }}>*</span>
            </div>
            <div className="field-input-box">
              <button id="resBtn" onChange={resChange}>
                <i className="fa-solid fa-paperclip"></i>&nbsp;
                {resumeLabel}
              </button>

              <input
                id="inputBtn"
                style={{ cursor: "pointer" }}
                required
                {...register("Resume", {})}
                type="file"
                onChange={resChange}
              />
             

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
                    {errors[item.label] && (
                      <p>{String(errors[item.label]?.message)}</p>
                    )}
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
                    {errors[item.label] && (
                      <p>{String(errors[item.label]?.message)}</p>
                    )}
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
                        className="text-box-addInfo"
                        placeholder={item.placeholder}
                        required={item.required}
                      />
                      {errors[item.name] && (
                        <p>{String(errors[item.name]?.message)}</p>
                      )}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <Selection register={register} err={errors} />
        </form>
        {snackMsg && <Snackbar />}
      </div>
    </div>
  );
};

export default Name;
