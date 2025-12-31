import Image from "next/image";
import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";

interface AchievementCardProps {
  title: string;
  org: string;
  link?: string;
  date: string | Date;
  note: string;
  clr: string;
  logoUrl: string;
}

const AchievementCard = ({
  title,
  org,
  link,
  date,
  note,
  clr,
  logoUrl,
}: AchievementCardProps) => {
  return (
    <div
      className={`bg-${clr} px-4 py-6 rounded-xl flex flex-col items-center text-center gap-4 font-mono tracking-tighter`}
    >
      <div className="w-26 h-26 rounded-full border-2 flex items-center justify-center">
        <Image
          src={logoUrl}
          alt={org}
          width={90}
          height={90}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="font-bold leading-tight text-xl sm:whitespace-pre-line">
          {title}
        </div>
        <div>{org}</div>
        <div>{note}</div>
        <div>{date.toString()}</div>
        {link && link !== "Profile" && (
          <Link href={link}>
            <div className="bg-secondary/50 backdrop-blur-sm px-6 py-2 text-white rounded-full font-bold cursor-pointer text-sm group">
              Visit
              <CgArrowTopRight
                size={18}
                className="hidden md:inline group-hover:ml-1 group-hover:rotate-45 duration-200 ease-in-out transition-all"
              />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default AchievementCard;
