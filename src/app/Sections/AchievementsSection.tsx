import AchievementCard from "../Components/AchievementCard";
import { achievementsData } from "../data";

const AchievementsSection = () => {
  return (
    <div className="w-screen" id="achievements">
      <div className="w-full font-mono tracking-tighter px-6 md:px-20 lg:px-40 flex flex-col gap-4 md:gap-8 md:pt-24">
        <div className="flex items-center justify-start gap-4 pr-4 w-full">
          <div className="text-white text-2xl sm:text-4xl lg:text-5xl font-black w-fit">
            My Achievements
          </div>
          <div className="border border-white w-1/5 md:w-1/3"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievementsData.map((item, index) => (
            <AchievementCard
              key={index}
              title={item.title}
              org={item.org}
              link={item.link}
              date={item.date}
              note={item.note}
              clr={index % 2 !== 0 ? "white" : "primary"}
              logoUrl={item.logoUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
