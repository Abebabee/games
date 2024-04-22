"use client"
import React from "react";
import Link from "next/link";

interface ButtonProps {
  name: string;
  href: string; // The destination page URL
  onClick?: ()=>void
}

const Button: React.FC<ButtonProps> = ({ name, href, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Link href={href}>
      <button className="bg-primary hover:bg-primary_hover rounded-lg py-1 px-3" onClick={handleClick}>{name}</button>
    </Link>
  );
};

export default Button;
