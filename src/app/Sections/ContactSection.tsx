import Marquee from "react-fast-marquee";
import SocialContainer from "../Components/SocialContainer";
import { socials } from "../data";

const ContactSection = () => {
  return (
    <div
      className="main_ctr w-screen flex items-center justify-center flex-col gap-4 sm:gap-8 tracking-tighter bg-primary font-mono font-black py-10 md:py-20"
      id="contact"
    >
      <div className="w-full font-mono tracking-tighter px-6 md:px-20 lg:px-40 flex flex-col md:mt-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-start gap-4 pr-4 w-full">
            <div className="text-secondary text-2xl sm:text-4xl lg:text-5xl font-black w-fit">
              Code. Teach. Ship.
            </div>
            <div className="border border-secondary w-1/6 md:w-1/3"></div>
          </div>
          <div className="text-lg md:text-xl md:pr-20 font-normal leading-tight">
            Let’s build something meaningful —{" "}
            <span className="font-black">together</span>.
            <br className="block md:hidden" />
            <div className="text-sm md:text-xl mt-2 md:mt-0">
              {" "}
              Open to collaborations, mentorship, and conversations about AI,
              education, and building in public.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Marquee
          direction="left"
          speed={50}
          pauseOnHover
          className="cursor-pointer"
        >
          <div className="socials_ctr flex items-center justify-center w-full py-2">
            {socials.map((item, index) => (
              <SocialContainer
                key={index}
                platformName={item.platformName}
                platformIcon={item.platformIcon}
                handle={item.handle}
                notes={item.notes}
                link={item.link}
              />
            ))}
          </div>
        </Marquee>
        <Marquee
          direction="right"
          speed={50}
          pauseOnHover
          className="cursor-pointer"
        >
          <div className="socials_ctr flex items-center justify-center w-full py-2">
            {socials.map((item, index) => (
              <SocialContainer
                key={index}
                platformName={item.platformName}
                platformIcon={item.platformIcon}
                handle={item.handle}
                notes={item.notes}
                link={item.link}
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default ContactSection;
