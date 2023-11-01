import Image from "next/image";
import Button from "./Button";
import Card from "./Card";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-20 pb-32 md:gap-28 lg:py-20 xl:flex-row">

      {/* Left Side */}
      <div className="relative z-20 flex flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Spare Valley Nature Retreat</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Join us on your journeys to discover the unspoiled beauty of nature.
          Our app is your ultimate companion, guiding you on a global adventure
          to explore the wondrous beauty of the natural world
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Download App" variant="btn_green" />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="relative flex flex-1 justify-center">
        <Image src="/truck.png" width={750} height={500} alt="map" />
      </div>
    </section>
  );
};

export default Hero;
0;
