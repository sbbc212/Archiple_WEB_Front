import { configuratordata } from "@/constants/3dconfiguratordata";

import SectionImage from "./SectionImage";
import SectionTitleAndContent from "./SectionTitleAndContent";

const ContentAndImage = () => {
  return (
    <div>
      {configuratordata.map((data) => (
        <>
          <SectionTitleAndContent key={data.id} content={data.textdata[1]} />
          <SectionImage sectionimg={data?.textdata[1]?.img || ""} />
        </>
      ))}
    </div>
  );
};

export default ContentAndImage;
