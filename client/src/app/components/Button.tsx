import React from "react";
import Link from "next/link";

interface ButtonProps {
  name: string;
  href: string; // The destination page URL
}

const Button: React.FC<ButtonProps> = ({ name, href }) => {
  return (
    <Link href={href}>
      <button className="bg-primary hover:bg-primary_hover rounded-lg py-1 px-3">{name}</button>
    </Link>
  );
};

export default Button;
