import React from "react";
import "./loading.css";

export const LoadingComponent = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div class="loader">
          <div class="loader__bar bg-primary"></div>
          <div class="loader__bar bg-primary"></div>
          <div class="loader__bar bg-primary"></div>
          <div class="loader__bar bg-primary"></div>
          <div class="loader__bar bg-primary"></div>
          <div class="loader__ball"></div>
        </div>
      </div>
    </>
  );
};
