import HeroSection from "./components/hero_section";
import MidSection from "./components/mid-section";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <>
      <div className="dark:bg-background relative min-h-screen ">
        <Navbar />

        <div className="z-[999]">
          <HeroSection />
          <MidSection />
          <div className="h-screen"></div>
          <div className="h-screen"></div>
        </div>
      </div>
    </>
  );
}
