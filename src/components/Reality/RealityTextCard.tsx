import { mainlastsection } from "@/constants/maindata";

import TextCard from "../Cardlayout/TextCard";

const RealityTextCard = () => {
  return (
    <div className="flex justify-between pb-9">
      {mainlastsection.map((item) => (
        <TextCard key={item.id} lastsection={item} />
      ))}
    </div>
  );
};

export default RealityTextCard;