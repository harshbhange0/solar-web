import BGVideo from "./components/bg-video";
import HeroSection from "./components/hero_section";
import Navbar from "./components/navbar";
import Container from "./components/ui/container";
import { ThemeProvider } from "./components/theme-provider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Container className="relative m-0 p-0">
        <BGVideo />
        <div className="from- z-[9] flex h-full flex-col items-center justify-center">
          <Navbar />
          <HeroSection />
          <div>
            <Container className="h-screen">
              <div></div>
            </Container>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
}
