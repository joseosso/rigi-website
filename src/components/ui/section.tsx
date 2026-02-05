import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  id: string;
  className?: string;
};

const Section = ({ children, id, className }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "w-[90%] md:w-[70%] p-4 h-fit m-auto bg-primary rounded-lg",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
