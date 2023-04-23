import React from "react";
import { MoonIcon, SunIcon } from "./Icon";
import "./DarkMode.css";

const DarkMode = () => {
  return (
    <div className="dark_mode">
      <input className="dark_mode_input" type="checkbox" id="darkmode-toggle" />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <SunIcon />
        <MoonIcon />
      </label>
    </div>
  );
};

export default DarkMode;
