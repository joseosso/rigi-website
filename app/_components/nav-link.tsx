"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => {
  const scrollToSection = (elementId: string) => {
    document.getElementById(elementId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Link
      href={href}
      scroll={true}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(href);
      }}
    >
      {children}
    </Link>
  );
};

export default NavLink;
