import React from "react";
import { MoonIcon, SunIcon } from "./Icon";
import "./DarkMode.css";
import useTheme from "../hooks/useTheme";

const DarkMode = () => {
  const [mode, setMode] = useTheme(null);
  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onClick={() => setMode(mode === "dark" ? "light" : "dark")}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <SunIcon />
        <MoonIcon />
      </label>
    </div>
  );
};

export default DarkMode;
