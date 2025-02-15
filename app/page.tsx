import HeroSection from "./_components/sections/hero-section";
import ToolsSection from "./_components/sections/tools-section";

export default function Home() {
  return (
    <main className="container h-full bg-background py-10 flex flex-col gap-y-10">
      <HeroSection />
      <ToolsSection />
    </main>
  );
}
