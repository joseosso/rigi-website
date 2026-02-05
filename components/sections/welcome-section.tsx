import ImageSlideshow from "@/components/ui/image-slideshow";
import Link from "next/link";

const WelcomeSection = () => {
  return (
    <header
      id="hero"
      className="mx-auto w-[90%] max-w-[75rem] lg:w-[60%] flex flex-col gap-y-5 lg:gap-y-3"
    >
      <div className="flex flex-col md:flex-row gap-[3rem] w-full">
        <div className="w-[70%] md:w-[45rem] h-[25rem] mx-auto">
          <ImageSlideshow />
        </div>
        <div className="flex flex-col gap-y-[1rem] text-center md:text-left">
          <h1 className="py-1 text-4xl font-bold lg:text-5xl bg-gradient-to-r from-orange-300 to-amber-300 text-transparent bg-clip-text">
            Welcome to Rigi Research
          </h1>
          <p className="text-2xl font-bold bg-gradient-to-r from-amber-50 to-orange-50 text-transparent bg-clip-text">
            Keep scrolling to discover our exciting tools, publications and
            crew!
          </p>
          <div className="w-full flex mt-2">
            <Link
              className="text-[1.5rem] text-amber-100 w-fit m-auto text-center p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out"
              href="mailto:test@rigi.com"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WelcomeSection;
