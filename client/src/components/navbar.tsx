import React from "react";
import { ModeToggle } from "./theme-toggle";

function Navbar() {
  return (
    <nav
      id="#nav"
      className="fixed top-0 z-[10] flex w-full flex-row items-center justify-between bg-gradient-to-l from-white/30 to-white/10 px-10 py-2 shadow-md backdrop-blur-xl"
    >
      <div id="nav-logo" className=""></div>
      <div className="flex items-center justify-center gap-4 flex-row">
        <h1
          id="nav-text"
          className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance"
        >
          Lorem.
        </h1>
        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
