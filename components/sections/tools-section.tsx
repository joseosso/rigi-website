import Section from "@/components/ui/section";
import ToolsGrid from "./tools-grid";

const ToolsSection = () => {
  return (
    <Section id="tools" className="flex flex-col gap-y-4">
      <h2 className="text-3xl font-semibold text-white">Tools</h2>
      <ToolsGrid />
    </Section>
  );
};

export default ToolsSection;
