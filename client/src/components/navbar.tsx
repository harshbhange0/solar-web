import { ModeToggle } from "./theme-toggle";
import { PiSolarPanelLight } from "react-icons/pi";
function Navbar() {
  return (
    <nav
      id="#nav"
      className="fixed top-0 flex w-full flex-row items-center justify-between bg-gradient-to-r from-white/10 from-0% to-indigo-900/10 to-100% px-10 py-3 shadow-sm backdrop-blur-sm"
    >
      <div>
        <PiSolarPanelLight
          size={40}
          className="text-yellow-400 text-shadow-yellow-200"
        />
      </div>
      <div className="flex flex-row items-center gap-4">
        <p className="font-sans text-2xl font-bold">Lorem, ipsum.</p>
        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
