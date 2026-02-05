import WelcomeSection from "@/components/sections/welcome-section";
import ToolsSection from "@/components/sections/tools-section";

export default function Home() {
  return (
    <main className="h-full py-10 flex flex-col gap-y-10">
      <WelcomeSection />
      <ToolsSection />
    </main>
  );
}
