"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-accent flex items-center justify-between min-h-16">
      <div className="flex flex-row justify-center items-center">
        <Link href="/">
          <h1 className="text-primary text-lg font-bold pl-5">Gamedle</h1>
        </Link>
        <div>
          <div className="flex flex-col items-center text-center justify-center ml-10">
            <button className="flex flex-row text-foreground hover:text-secondary_foreground text-center items-center justify-center" onClick={toggleDropdown}>
              <p className="pr-1">Games</p>
              <IoIosArrowDown className="text-primary mt-1"></IoIosArrowDown>
            </button>
          </div>
          {isOpen && (
            <div
              id="dropdown"
              className="absolute left-30 ml-8 mt-1 bg-card divide-y divide-secondary_foreground"
            >
              <ul className="">
                <li>
                  <a
                    href="/higherlower"
                    className="block px-4 py-2 text-foreground hover:text-secondary_foreground hover:underline"
                  >
                    PopulationGuessr
                  </a>
                </li>
                <li>
                  <a
                    href="/timelined"
                    className="block px-4 py-2 text-foreground hover:text-secondary_foreground hover:underline"
                  >
                    TimeLined
                  </a>
                </li>
                <li>
                  <a
                    href="/worldwits"
                    className="block px-4 py-2 text-foreground hover:text-secondary_foreground hover:underline"
                  >
                    WorldWits
                  </a>
                </li>
                <li>
                  <a
                    href="/behindyou"
                    className="block px-4 py-2 text-foreground hover:text-secondary_foreground hover:underline"
                  >
                    BehindYou
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center pr-5">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
