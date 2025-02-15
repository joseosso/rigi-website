import ImageSlideshow from "@/components/ui/image-slideshow";

const HeroHeader = () => {
  return (
    <header
      id="hero"
      className="mx-auto w-[90%] max-w-[75rem] lg:w-[60%] flex flex-col gap-y-5 lg:gap-y-3"
    >
      <div className="flex gap-[3rem]">
        <div className="w-[40rem] h-[25rem]">
          <ImageSlideshow />
        </div>
        <div className="flex flex-col gap-y-[1rem] ">
          <h1 className="text-4xl font-bold lg:text-5xl bg-gradient-to-r from-amber-200 to-orange-400 text-transparent bg-clip-text">
            Welcome to the Rigi Research Website
          </h1>
          <p className="text-2xl font-bold bg-gradient-to-r from-amber-50 to-orange-50 text-transparent bg-clip-text">
            Keep scrolling to discover our exciting tools, publications and
            crew!
          </p>
        </div>
      </div>
    </header>
  );
};

export default HeroHeader;
