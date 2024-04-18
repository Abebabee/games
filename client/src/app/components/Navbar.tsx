import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="bg-accent flex items-center justify-between min-h-16">
        <div>
            <h1 className="text-primary text-lg font-bold pl-5">Gamedle</h1>
        </div>
        <div className="flex items-center pr-5">
          <ThemeToggle />
        </div>
    </div>
  );
};

export default Navbar;
