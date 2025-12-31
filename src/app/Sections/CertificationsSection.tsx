import Certification from "../Components/Certification";
import { certifications } from "../data";

const CertificationsSection = () => {
  return (
    <div className="w-screen" id="certifications">
      <div className="w-full font-mono tracking-tighter px-6 md:px-20 lg:px-40 flex flex-col gap-4 sm:gap-8 md:pt-24">
        <div className="flex items-center justify-start gap-4 pr-4 w-full">
          <div className="text-white text-2xl sm:text-4xl lg:text-5xl font-black w-fit">
            My Certifications
          </div>
          <div className="border border-white w-1/5 md:w-1/3"></div>
        </div>
        <Certification certifications={certifications} className="mb-8" />
      </div>
    </div>
  );
};

export default CertificationsSection;
