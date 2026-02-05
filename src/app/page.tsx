import WelcomeSection from '@/components/sections/WelcomeSection';
import ToolsSection from '@/components/sections/tools/ToolsSection';

export default function Home() {
  return (
    <main className="h-full py-10 flex flex-col gap-y-10">
      <WelcomeSection />
      <ToolsSection />
    </main>
  );
}
