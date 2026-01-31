import React, { useEffect, useState } from "react";
import useTheme from "../hooks/useTheme";
// import React from 'react';

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    if (theme === "dark") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [theme]);

  return (
    <label className="relative inline-block w-16 h-8 select-none cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="peer opacity-0 w-0 h-0"
      />

      <span
        className={`absolute inset-0 rounded-full transition-colors duration-400
          ${checked ? "bg-[#183153]" : "bg-[#73C0FC]"}`}
      />

      <span
        className={`absolute bottom-0.5 left-0.5 h-7 w-7 rounded-full bg-[#e8e8e8] z-10 transition-transform duration-400
          ${checked ? "translate-x-8" : "translate-x-0"}`}
      />

      {/* Sun Icon */}
      <span
        className="absolute top-1 left-9 w-6 h-6 text-yellow-400
          pointer-events-none
          animate-[spin_15s_linear_infinite]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1-.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1-.75.29zm-12.02 12.02a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1-.7.24zm6.36-14.36a1 1 0 0 1-1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1zm0 17a1 1 0 0 1-1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1zm-5.66-14.66a1 1 0 0 1-.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1-.71.29zm12.02 12.02a1 1 0 0 1-.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1-.71.24z" />
        </svg>
      </span>

      {/* Moon Icon */}
      <span
        className="absolute top-1.5 left-2 w-4 h-4 text-[#73C0FC]
          pointer-events-none
          animate-[tilt_5s_linear_infinite]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          fill="currentColor"
        >
          <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
        </svg>
      </span>

      <style>{`
        @keyframes tilt {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-[tilt_5s_linear_infinite] {
          animation: tilt 5s linear infinite;
        }
      `}</style>
    </label>
  );
};

export default ThemeSwitch;
