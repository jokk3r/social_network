import React from "react";
import loading from "../../img/loader.gif";

let Preloader = (props) => {
  return (
    <div>
      <img src={loading} style={{ width: "50px" }} />
    </div>
  );
};

export default Preloader;
