import SectionTitleAndContent from "../Section/SectionTitleAndContent";
import TextImageCard from "../textimagecard/TextImageCard";

import { configuratordata } from "@/constants/3dconfiguratordata";
import { carddata } from "@/constants/imagecard";

const SectionSix = () => {
  return (
    <div>
      {configuratordata.map((data) => (
        <>
          <SectionTitleAndContent key={data.id} content={data.textdata[4]} />
          <TextImageCard data={carddata} datatype={data.textdata[2].datatype || ""} />
        </>
      ))}
      <TextImageCard data={[]} datatype={""} />
      <TextImageCard data={[]} datatype={""} />
    </div>
  );
};

export default SectionSix;
