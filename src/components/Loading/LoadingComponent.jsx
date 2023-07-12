import React from "react";
import "./loading.css";

export const LoadingComponent = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="loader">
          <div className="loader__bar bg-primary"></div>
          <div className="loader__bar bg-primary"></div>
          <div className="loader__bar bg-primary"></div>
          <div className="loader__bar bg-primary"></div>
          <div className="loader__bar bg-primary"></div>
          <div className="loader__ball"></div>
        </div>
      </div>
    </>
  );
};
