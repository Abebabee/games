"use client";
import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div className="cursor-pointer rounded-full p-1 self-end"
    onClick={()=>setDarkMode(!darkMode)}>
        {darkMode ? 
            <MdLightMode className="text-foreground hover:text-foreground/60" size={30}/>
            : <MdDarkMode className="text-foreground hover:text-foreground/60" size={30}/>
        }
      
    </div>
  );
};

export default ThemeToggle;
