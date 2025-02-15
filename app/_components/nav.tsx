import { ModeToggle } from "@/components/theme/mode-toggle";
import Sidebar from "./sidebar";
import NavLink from "./nav-link";
import HeaderBackground from "./header-background";

const Navbar = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "#tools" },
    { label: "Publications", href: "#publications" },
    { label: "Crew", href: "#crew" },
  ];

  return (
    <header className="p-8 md:px-[10%]">
      <HeaderBackground />
      <nav className="h-20 z-[49] items-center w-full">
        <div className="h-full flex justify-between items-center lg:hidden">
          <Sidebar />
          <ModeToggle />
        </div>
        <div className="hidden lg:flex  h-full justify-between m-auto items-center">
          <div className="h-full flex gap-x-10 items-center">
            <h1 className="text-4xl text-primary-foreground font-bold">
              Rigi Research
            </h1>
            <ul className="flex space-x-4 text-[1.25rem] font-bold text-primary-foreground">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <NavLink href={href}>{label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
