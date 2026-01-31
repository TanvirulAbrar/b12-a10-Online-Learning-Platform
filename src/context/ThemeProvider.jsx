import React, { useEffect, useState } from "react";
import saveandload from "../component/saveandload";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => saveandload.getTheme() || "default");

  const themeList = [
    {
      name: "default",
      bg: "bg-base-100",
      textColor: "text-base-content",
    },
    {
      name: "light",
      bg: "bg-white",
      textColor: "text-gray-900",
    },
    {
      name: "dark",
      bg: "bg-blue-500",
      textColor: "text-neutral-content",
    },
  ];

  const [CurrentTheme, setCurrentTheme] = useState(themeList[0]);

  const [bg, setBg] = useState(themeList[0].bg);
  const [textColor, setTextColor] = useState(themeList[0].textColor);
  // const SetTheme = (value) => {
  //   saveandload.setTheme?.(theme);
  //   setTheme(value);
  // };

  useEffect(() => {
    const selectedTheme =
      themeList.find((t) => t.name === theme) || themeList[0];

    setCurrentTheme(selectedTheme);
    setBg(selectedTheme.bg);
    setTextColor(selectedTheme.textColor);

    saveandload.saveTheme(theme);
    // console.log(theme != "default");
    if (theme === "default") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      document.documentElement.setAttribute(
        "data-theme",
        prefersDark ? "dark" : "light"
      );
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  const items = {
    theme,
    setTheme,
    bg,
    textColor,
    CurrentTheme,
    themeList,
  };

  return (
    <ThemeContext.Provider value={items}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
