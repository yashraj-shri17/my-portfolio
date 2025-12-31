import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa"; // Make sure to install react-icons

interface SocialContainerProps {
  platformName: string;
  platformIcon: string;
  handle: string;
  link: string;
  notes: string;
}

const SocialContainer = ({
  platformName,
  platformIcon,
  handle,
  link,
  notes,
}: SocialContainerProps) => {
  return (
    <div className="testimonial_card h-[180px] sm:h-[175px] w-[250px] sm:w-[350px] shrink-0 rounded-lg bg-[#e0e0e0]/50 shadow-md p-6 flex flex-col gap-1 relative mr-4 border border-primary">
      {/* Platform Icon */}
      <div className="absolute top-4 right-4">
        <Image
          src={platformIcon}
          alt={`${platformName} logo`}
          width={40}
          height={40}
          className="rounded-md" // Or any other Tailwind classes you want for styling the icon
        />
      </div>

      {/* Platform Name */}
      <h3 className="text-xl sm:text-3xl font-bold text-secondary">
        {platformName}
      </h3>

      {/* Handle */}
      <div className="flex items-center gap-2 mt-2">
        <span className="text-gray-600">@</span>
        <span className="font-medium text-gray-900 truncate">{handle}</span>
      </div>

      {/* Notes */}
      <p className="text-sm text-secondary/90 flex-grow">{notes}</p>

      {/* Link Button */}
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <div className="absolute bottom-2 sm:bottom-4 right-4 inline-flex items-center px-4 py-2 bg-white text-gray-800 text-sm font-medium rounded-md border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer group">
          Connect
          <FaExternalLinkAlt className="ml-2 h-3 w-3 group-hover:scale-110 duration-200 ease-in-out" />
        </div>
      </Link>
    </div>
  );
};

export default SocialContainer;
