import Image from "next/image";
import AnimatedCounter from "../Components/AnimatedCounter";
import Link from "next/link";

const NeuralMindsSection = () => {
  return (
    <div
      className="bg-white rounded-t-[50px] md:rounded-t-[75px]"
      id="neural-minds"
      style={{ width: '100vw', overflowX: 'hidden', minHeight: '600px' }}
    >
      <div className="w-full font-mono tracking-tighter py-12 md:py-32 px-6 md:px-20 lg:px-40 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-start gap-4 pr-4 w-full">
            <div className="text-secondary text-2xl sm:text-4xl lg:text-5xl font-black w-fit">
              NeuralMinds
            </div>
            <div className="border border-secondary w-1/2"></div>
          </div>
          <div className="text-lg md:text-xl md:pr-20 leading-tight">
            A platform dedicated to teaching{" "}
            <span className="font-black">AI</span>,
            <span className="font-black">ML</span>,{" "}
            <span className="font-black">LLMs</span>, and project-based
            learning. Taught <span className="font-black">800+</span> students
            via YouTube and EdTech programs.
          </div>
        </div>
        <div>
          <div className="w-full flex flex-col md:flex-row items-end justify-between gap-4 md:gap-10">
            <div className="bg-primary rounded-xl px-10 w-full md:w-[30%] h-[250px] relative mt-32 flex justify-center">
              <Image
                src="/NeuralMindsImg.png"
                alt="Yashraj Founder"
                width={250}
                height={200}
                className="absolute bottom-0"
              />
            </div>
            <div className="w-full md:w-[70%] grid grid-cols-2 gap-4 md:gap-6">
              {/* Card 1: Subscribers */}
              <div className="bg-primary p-10 rounded-xl flex flex-col items-center justify-center text-white">
                <AnimatedCounter
                  value={200}
                  suffix="+"
                  className="font-black text-3xl"
                />
                <div className="text-lg md:text-xl -mt-2 md:mt-0">
                  Subscribers
                </div>
              </div>

              {/* Card 2: No animation */}
              <Link
                href="https://www.youtube.com/@NeuralMinds3"
                target="_blank"
                rel="noreferrer noopener"
                className="bg-primary p-10 rounded-xl flex items-center justify-center group cursor-pointer"
              >
                <Image
                  src="/YouTubeLogo.png"
                  alt="YouTube Logo"
                  width={200}
                  height={200}
                  className="w-full group-hover:scale-105 duration-300 ease-in-out transition-all"
                />
              </Link>

              {/* Card 3: No animation */}

              <Link
                href="https://www.instagram.com/_neuralminds_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer noopener"
                className="bg-primary p-10 rounded-xl flex items-center justify-center group cursor-pointer"
              >
                <Image
                  src="/InstagramLogo.png"
                  alt="Instagram Logo"
                  width={200}
                  height={200}
                  className="w-full group-hover:scale-105 duration-300 ease-in-out transition-all"
                />
              </Link>

              {/* Card 4: Videos */}
              <div className="bg-primary p-10 rounded-xl flex flex-col items-center justify-center text-white">
                <AnimatedCounter
                  value={50}
                  suffix="+"
                  className="font-black text-3xl"
                />
                <div className="text-lg md:text-xl -mt-2 md:mt-0">Videos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralMindsSection;
