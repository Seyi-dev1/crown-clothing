import "./loaderButton.scss";

import React from "react";

const LoaderButton = () => {
  return (
    <button className={"loaderButton"}>
      <div className={"loader"}></div>
    </button>
  );
};

export default LoaderButton;
