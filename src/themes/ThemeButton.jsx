import React, { useEffect } from "react";
import useTheme from "../hooks/useTheme";
// import ThemeContext from "../theme/ThemeContext";

const ThemeButton = () => {
  const { theme, setTheme, themeList } = useTheme();
  useEffect(() => {
    // document.documentElement.setAttribute("data-theme", theme);

    document.documentElement.classList.add("theme-transition");

    const timeout = setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 300);

    return () => clearTimeout(timeout);
  }, [theme]);

  return (
    <div className="flex gap-2 items-center">
      {themeList.map((t) => (
        <button
          key={t.name}
          onClick={() => setTheme(t.name)}
          className={`btn btn-sm ${
            theme === t.name ? "btn-primary" : "btn-outline"
          }`}
        >
          {t.name}
        </button>
      ))}
    </div>
  );
};

export default ThemeButton;
