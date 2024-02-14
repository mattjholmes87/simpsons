import React from "react";

const Loading = () => {
  return (
    <div className="spinnerBox">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
