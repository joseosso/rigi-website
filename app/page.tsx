import HeroHeader from "./_components/sections/hero-header";
import ToolsSection from "./_components/sections/tools-section";

export default function Home() {
  return (
    <main className="h-full py-10 flex flex-col gap-y-10">
      <HeroHeader />
      <ToolsSection />
    </main>
  );
}
