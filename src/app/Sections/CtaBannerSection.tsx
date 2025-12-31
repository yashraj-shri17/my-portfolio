import Image from "next/image";
import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";

const CTABannerSection = () => {
  return (
    <div
      id="resume"
      className="w-screen flex items-center justify-center p-4 md:p-8 lg:p-12 xl:p-10 bg-primary font-mono tracking-tighter pt-10 lg:pt-0"
    >
      <div className="bg-secondary flex flex-col gap-4 md:gap-6 items-center w-full h-full rounded-xl pt-8 px-8 md:px-0  md:pt-16 drop-shadow-lg relative overflow-hidden md:mx-10 lg:mx-40 shadow-2xl md:mt-12">
        <div className="flex flex-col gap-8 md:gap-10 w-full items-center px-4 md:px-8">
          <div className="flex flex-col items-center justify-center gap-1 w-full">
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl w-full lg:w-3/4 text-center text-white leading-tight">
              Since You Scrolled Till Here
            </h1>
            <h2 className="text-white text-sm md:text-xl text-center px-2 tracking-tight leading-tight">
              here&lsquo;s my <span className="font-black">resume</span>
            </h2>
          </div>
          <div className="relative w-full flex justify-center">
            <Image src="/Resume3d.png" alt="Resume" width={400} height={100} />
            <div className="w-full absolute bottom-2 md:bottom-4 flex justify-center scale-75">
              <div className="bg-secondary/75 backdrop-blur-xs rounded-full py-2 px-3 md:px-4 flex items-center justify-center gap-2 w-fit">
                <Link
                  href="https://drive.google.com/file/d/16f6HShDcNFJ3cROQJBLoACY1X8Af2KXT/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="cursor-pointer group"
                >
                  <div className="border-2 border-transparent bg-primary text-white rounded-full px-6 md:px-10 py-1.5 md:py-2 flex items-center justify-center gap-2 cursor-pointer text-sm md:text-base">
                    Resume
                    <CgArrowTopRight
                      size={18}
                      className="hidden md:inline group-hover:ml-1 group-hover:rotate-45 duration-200 ease-in-out transition-all"
                    />
                    <CgArrowTopRight size={14} className="md:hidden" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTABannerSection;
