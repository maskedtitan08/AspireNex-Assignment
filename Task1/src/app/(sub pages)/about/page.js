import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import AboutDetails from "@/components/about";

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      <Image src={bg} priority sizes="100vw" alt="Portfolio's about page background image" className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50" />

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold mt-0 mb-8 text-5xl xs:text-5xl sm:text-6xl  lg:text-7xl text-accent">
            Shreshtha Gupta
          </h1>
          <p className="font-light text-foreground text-xl">
            The developer behind this portfolio
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}