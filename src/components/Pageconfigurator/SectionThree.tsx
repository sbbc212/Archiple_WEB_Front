import SectionCard from "./SectionCard";
import SectionTitleAndContent from "../Section/SectionTitleAndContent";

import { configuratordata } from "@/constants/3dconfiguratordata";

const SectionThree = () => {
  return (
    <>
      {configuratordata.map((data) => {
        <div key={data.id} className="section-tit text-center mb-[60px]" style={{ padding: "30px 60px 0 60px" }}>
          <SectionTitleAndContent content={data.textdata[2]} />;
          <SectionCard />
          <SectionCard />
          <SectionCard />
        </div>;
      })}
    </>
  );
};

export default SectionThree;
