import React from "react";
import "./snackBar.css";

const Snackbar = () => {


    const refresh =()=>{
        window.location.reload();
    }
  return (
    <div className="snack">
      <p>Data sent succesfully!</p>
      <button onClick={refresh}>Click here to refresh page</button>
    </div>
  );
};
export default Snackbar;
