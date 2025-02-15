const HeroSection = () => {
  return (
    <header
      id="hero"
      className="mx-auto w-[90%] max-w-[75rem] lg:w-[60%] text-center flex flex-col gap-y-5 lg:gap-y-3"
    >
      <h1 className="text-4xl font-bold lg:text-5xl text-primary">
        Welcome to the Rigi Research Website
      </h1>
      <p className="text-2xl text-muted-foreground">
        Keep scrolling to discover our exciting tools, publications and crew!
      </p>
    </header>
  );
};

export default HeroSection;
