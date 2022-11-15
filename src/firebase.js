 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyCWdeIbgqqBaDQE4H5sjQCr5YuzeVAvidc",
  authDomain: "react-form-6a897.firebaseapp.com",
  databaseURL: "https://react-form-6a897-default-rtdb.firebaseio.com",
  projectId: "react-form-6a897",
  storageBucket: "react-form-6a897.appspot.com",
  messagingSenderId: "1063264516954",
  appId: "1:1063264516954:web:271e9a0abdea187f0d9163"
};

 // Initialize Firebase
 
 const app = initializeApp(firebaseConfig);
 // Export firestore database
 // It will be imported into your react app whenever it is needed
 export const db = getFirestore(app);