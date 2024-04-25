import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="bg-accent flex items-center justify-between min-h-16">
      <Link href="/">
        <h1 className="text-primary text-lg font-bold pl-5">Gamedle</h1>
      </Link>
      <div className="flex items-center pr-5">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
