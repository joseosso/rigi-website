import { ModeToggle } from "@/components/theme/mode-toggle";
import Sidebar from "./sidebar";

const Navbar = () => {
  return (
    <nav className=" w-full h-20 z-[49] bg-primary px-2 lg:px-4 shadow-sm">
      <div className="h-full flex justify-between items-center lg:hidden">
        <Sidebar />
        <ModeToggle />
      </div>
      <div className="hidden lg:flex container h-full justify-between items-center">
        <div className="h-full flex gap-x-10 items-center">
          <h1 className="text-2xl text-white font-bold">Rigi Research</h1>
          <ul className="flex space-x-4 text-lg text-primary-foreground">
            <li>
              <a href="#" className="hover:opacity-70">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-70">
                Tools
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-70">
                Publications
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-70">
                Crew
              </a>
            </li>
          </ul>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
