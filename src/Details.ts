
// import { useState } from "react";

// const [details,setDetails]=useState(false);
const showDetails=()=>{
    alert("sahh")
    // setDetails(!details)
}
const regEx = '^[a-z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,4}$'

interface Fields{
  placeholder:string;
  type:string;
  label:string;
  required:boolean;
  name?:string;
  min?:number;
  maxN?:number;
  message?:string;
  regexEmail?:string;
  pattern?:any
  mailVal?:any
}
interface AddInfo{
  placeholder:string;
  type:string;
  label:string;
  required:boolean;
  name:string;
}

interface SelectionList{
  heading?:{
              head:string;
              text:String
            }[];
  label:string;
  name:string;
  options:string[];
  required?:boolean;
} 

export const fields:Fields[] = [
  {
      placeholder:"Attach Resume/CV",
      type:"file",
      label:"RESUME/CV",
      required:true,
      // maxLen : 5
  },
  {
    placeholder: "Full Name",
    type: "text",
    label: "Full Name",
    required: true,
    min:11,
    message:"it require more than 10 letters"
  },
  {
    placeholder: "Email",
    type: "email",
    label: "Email",
    required: true,
    // maxLen : 5
    mailVal:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  },
  {
    placeholder: "Phone",
    type: "number",
    label: "Phone",
    required: false,
    maxN:10,
    
    
    // maxLen : 5
  },
  {
    placeholder: "Company Name",
    type: "text",
    label: "Current Company",
    required: true,

    // maxLen : 5
  },
];

export const linksField:Fields[] = [
  {
    placeholder: "LinkedIn URL",
    type: "text",
    label: "LinkedIn URL",
    required: false,
    pattern:/^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
    // maxLen : 5
  },
  {
    placeholder: "twitter URL",
    type: "text",
    label: "Twitter URL",
    required: false,
    pattern:/^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
    // maxLen : 5
  },
  {
    placeholder: "GitHub URL",
    type: "text",
    label: "GitHub URL",
    required: false,
    pattern:/^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
    // maxLen : 5
  },
  {
    placeholder: "Portfolio URL",
    type: "text",
    label: "Portfolio URL",
    
    required: false,
    pattern:/^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
    // maxLen : 5
  },
  {
    placeholder: "Website link",
    type: "text",
    label: "Other Website",
    required: false,
    pattern:/^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/
    // maxLen : 5
  },
];

export const pronouns :AddInfo[]= [
  {
    placeholder: "Type your response",
    type: "text",
    label: "If you'd like, please share your pronouns with us.",
    required: false,
    name: "pronouns"
  },
];

export const addInfo:AddInfo[] = [
  {
    placeholder: "Add a cover letter or anything else you want to sahre",
    type: "text",
    label: "Cover Letter",
    name: "additional info",
    required: false,
  },
];

export const selectionList:SelectionList[] = [
  {
    name: "gender",
    label: "Gender",
    options: ["Select...", "Male", "Female", "Other"],
    required: true
  },
  { 
    name: "race",
    heading: [
      {
        head: "Hispanic or Latino",
        text: "A person of Cuban, Mexican, Puerto Rican, South or Central American, or other Spanish culture or origin regardless of race.",
      },
      {
        head: "White (Not Hispanic or Latino)",
        text: "A person having origins in any of the original peoples of Europe, the Middle East, or North Africa.",
      },
      {
        head: "Black or African American (Not Hispanic or Latino)",
        text: "A person having origins in any of the black racial groups of Africa.",
      },
      {
        head: "Native Hawaiian or Other Pacific Islander (Not Hispanic or Latino)",
        text: "A person having origins in any of the peoples of Hawaii, Guam, Samoa, or other Pacific Islands.",
      },
      {
        head: "Asian (Not Hispanic or Latino)",
        text: "A person having origins in any of the original peoples of the Far East, Southeast Asia, or the Indian Subcontinent, including, for example, Cambodia, China, India, Japan, Korea, Malaysia, Pakistan, the Philippine Islands, Thailand, and Vietnam",
      },
      {
        head: "American Indian or Alaska Native (Not Hispanic or Latino)",
        text: "A person having origins in any of the original peoples of North and South America (including Central America), and who maintain tribal affiliation or community attachment.",
      },
      {
        head: "Two or More Races (Not Hispanic or Latino)",
        text: "All persons who identify with more than one of the above five races.",
      },
    ],
    
    label: "Race",
    // onclick:{showDetails},

    options: ["Select...", "1", "2", "3", "4", "5", "6", "7", "8"],
  },
  {
    name: "status",
    

    label: "Veteran Status",
    options: [
      "Select...",
      "I am a veteran",
      "I am not a veteran",
      "Decline to self-identity",
    ],
  },
];
