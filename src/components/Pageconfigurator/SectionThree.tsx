import { configuratordata, nobtncardData } from "@/constants/3dconfiguratordata";

import ThreeCardGroup from "./ThreeCardGroup";
import Linebtn from "../Button/Linebtn";
import SectionTitleAndContent from "../Section/SectionTitleAndContent";

import type { maincardDataType } from "@/constants/maindata";

const SectionThree = () => {
  const dataSize = 3;
  const ThreeLengthData: maincardDataType[][] = [];

  for (let i = 0; i < nobtncardData.length; i += dataSize) {
    ThreeLengthData.push(nobtncardData.slice(i, i + dataSize));
  }
  return (
    <div className="flex flex-col text-center">
      <div className="section-tit text-center mb-[60px]" style={{ padding: "30px 60px 0 60px" }}>
        <SectionTitleAndContent content={configuratordata[0].textdata[4]} />
      </div>
      {ThreeLengthData.map((item, i) => (
        <ul key={item[i].id} className="flex text-start justify-between pb-[60px]">
          <ThreeCardGroup content={item} />
        </ul>
      ))}
      <div className="py-[3rem]">
        <Linebtn text={"Archiple 도움말 섹션에서 자세히 알아보세요."} />
      </div>
    </div>
  );
};

export default SectionThree;
