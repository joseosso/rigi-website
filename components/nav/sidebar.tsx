import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="bg-primary border-none">
        <SheetHeader>
          <SheetTitle>
            <h1 className="text-2xl text-primary-foreground">Rigi Research</h1>
          </SheetTitle>
        </SheetHeader>
        <div className="h-full w-full pt-10">
          <ul className="flex flex-col space-y-4 text-md text-primary-foreground">
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
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
