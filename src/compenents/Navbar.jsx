import React from "react";
import { navlinks } from "../data/data.jsx";
import { MenuIcon } from "lucide-react";
const Navbar = () => {
  return (
    <>
      <nav className="fixed bg-transparent top-0 z-20 px-auto w-full transition-all duration-300">
        <div className="flex items-center justify-between font-medium py-4 mx-auto max-w-7xl">
          <a href="/">
            Logo <img src="" alt="" />
          </a>
          <div className="hidden md:flex items-center gap-10">
            {navlinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-zinc-300 "
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href=""
            className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition"
          >
            Book a table
          </a>
          <button className="md:hidden bg-zinc-800 text-white p-2 rounded-b-md aspect-square">
            <MenuIcon />
          </button>
        </div>
      </nav>
      <div>
        <div className="flex flex-col items-center space-y-6 font-medium"></div>
      </div>
    </>
  );
};

export default Navbar;
